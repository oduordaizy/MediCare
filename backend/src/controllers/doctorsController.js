const User = require('../models/User');
const Doctor = require('../models/doctor');

exports.getDoctors = async (req, res) => {
    try {
        const doctors = await User.findAll({ 
            where: { role: 'doctor' },
            include: [{ model: Doctor, as: 'doctorProfile' }]
        });
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; 