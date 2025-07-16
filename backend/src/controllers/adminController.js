const Admin = require('../models/admin');

exports.getAdmin = async (req, res) => {
    try {
        const admins = await Admin.findAll();
        res.status(200).json(admins);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}; 