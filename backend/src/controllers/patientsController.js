const User = require('../models/User');
const Patient = require('../models/patient');

exports.getPatients = async (req, res) => {
    try {
        const patients = await User.findAll({ 
            where: { role: 'patient' },
            include: [{ model: Patient, as: 'patientProfile' }]
        });
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; 