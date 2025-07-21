const User = require('../models/User');
const Patient = require('../models/patient');
const Doctor = require('../models/doctor');

// GET profile by user ID
exports.getProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    let profile = null;
    
    if (user.role === 'patient') {
      profile = await Patient.findByPk(userId);
    } else if (user.role === 'doctor') {
      profile = await Doctor.findByPk(userId);
    }

    res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      profile: profile
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST - Create profile
exports.createProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const profileData = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    let profile = null;

    if (user.role === 'patient') {
      // Check if profile already exists
      const existingProfile = await Patient.findByPk(userId);
      if (existingProfile) {
        return res.status(400).json({ error: 'Patient profile already exists' });
      }

      profile = await Patient.create({
        id: userId,
        age: profileData.age,
        gender: profileData.gender,
        phone: profileData.phone,
        medical_history: profileData.medical_history
      });
    } else if (user.role === 'doctor') {
      // Check if profile already exists
      const existingProfile = await Doctor.findByPk(userId);
      if (existingProfile) {
        return res.status(400).json({ error: 'Doctor profile already exists' });
      }

      profile = await Doctor.create({
        id: userId,
        specialization: profileData.specialization,
        location: profileData.location,
        rating: profileData.rating || 0.0
      });
    } else {
      return res.status(400).json({ error: 'Invalid user role for profile creation' });
    }

    res.status(201).json({
      message: 'Profile created successfully',
      profile: profile
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT - Update profile
exports.updateProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const profileData = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    let profile = null;

    if (user.role === 'patient') {
      profile = await Patient.findByPk(userId);
      if (!profile) {
        return res.status(404).json({ error: 'Patient profile not found. Please create a profile first.' });
      }

      await profile.update({
        age: profileData.age !== undefined ? profileData.age : profile.age,
        gender: profileData.gender !== undefined ? profileData.gender : profile.gender,
        phone: profileData.phone !== undefined ? profileData.phone : profile.phone,
        medical_history: profileData.medical_history !== undefined ? profileData.medical_history : profile.medical_history
      });
    } else if (user.role === 'doctor') {
      profile = await Doctor.findByPk(userId);
      if (!profile) {
        return res.status(404).json({ error: 'Doctor profile not found. Please create a profile first.' });
      }

      await profile.update({
        specialization: profileData.specialization !== undefined ? profileData.specialization : profile.specialization,
        location: profileData.location !== undefined ? profileData.location : profile.location,
        rating: profileData.rating !== undefined ? profileData.rating : profile.rating
      });
    } else {
      return res.status(400).json({ error: 'Invalid user role for profile update' });
    }

    res.status(200).json({
      message: 'Profile updated successfully',
      profile: profile
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE - Delete profile
exports.deleteProfile = async (req, res) => {
    try {
        const {id} = req.params
        const user = await User.findByPk(id)
        if(!user) {
            return res.status(404).json({message: 'User not found'})
        }
        let profile = null
        if(user.role === 'patient') {
            profile = await Patient.findOne({where: {userId: id}})
        } else if(user.role === 'doctor') {
            profile = await Doctor.findOne({where: {userId: id}})
        }
        if(!profile) {
            return res.status(404).json({message: 'Profile not found'})
        }
        await profile.destroy()
        res.status(200).json({
            message: 'Profile deleted successfully'
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// GET - Get all profiles by role (for admin use only)
exports.getAllProfiles = async (req, res) => {
    try {
        const {role} = req.query
        if(!role) {
            return res.status(400).json({message: 'Role is required'})
        }
        const profiles = await User.findAll({
            where: {role},
            include: [
                {model: Patient, as: 'Patient'},
                {model: Doctor, as: 'Doctor'}
            ]
        })
        res.status(200).json({
            profiles: profiles.map(profile => ({
                id: profile.id,
                username: profile.name,
                email: profile.email,
                role: profile.role,
                profile: profile.role === 'patient' ? profile.Patient : profile.Doctor
            }))
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}