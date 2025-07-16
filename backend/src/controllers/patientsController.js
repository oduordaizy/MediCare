const Patient = require('../models/patient');

exports.getPatients = async (req, res) => {
    try {
        const patients = await Patient.findAll();
        res.status(200).json(patients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}; 