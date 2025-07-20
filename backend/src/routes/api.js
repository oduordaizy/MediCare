const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

const patientsController = require('../controllers/patientsController');
const doctorsController = require('../controllers/doctorsController');
const appointmentsController = require('../controllers/appointmentsController');
const adminController = require('../controllers/adminController');

// Patient routes - accessible by patients and doctors
router.get('/patients', auth(['patient', 'doctor', 'admin']), patientsController.getPatients);

// Doctor routes - accessible by doctors and admins
router.get('/doctors', auth(['doctor', 'admin']), doctorsController.getDoctors);

// Appointment routes - accessible by all authenticated users
router.get('/appointments', auth(['patient', 'doctor', 'admin']), appointmentsController.getAppointments);

// Admin routes - accessible only by admins
router.get('/admin', auth(['admin']), adminController.getAdmin);

module.exports = router; 