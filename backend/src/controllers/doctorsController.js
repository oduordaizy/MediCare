const User = require('../models/User');

exports.getDoctors = async (req, res) => {
    try {
        const doctors = await User.findAll({ where: { role: 'doctor' } });
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; 