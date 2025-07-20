const User = require('../models/User');

exports.getAdmin = async (req, res) => {
    try {
        const admins = await User.findAll({ where: { role: 'admin' } });
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; 