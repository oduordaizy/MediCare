const User = require('../models/User');

exports.getPatients = async (req, res) => {
    try {
        const patients = await User.findAll({ where: { role: 'patient' } });
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; 