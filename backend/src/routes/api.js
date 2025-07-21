const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

const patientsController = require('../controllers/patientsController');
const doctorsController = require('../controllers/doctorsController');
const appointmentsController = require('../controllers/appointmentsController');
const adminController = require('../controllers/adminController');
const profileController = require('../controllers/profileController');

// Patient routes - accessible by patients and doctors
router.get('/patients', patientsController.getPatients);

// Doctor routes - accessible by doctors and admins
router.get('/doctors', doctorsController.getDoctors);

// Appointment routes - accessible by all authenticated users
router.get('/appointments', appointmentsController.getAppointments);

// Admin routes - accessible only by admins
router.get('/admin', adminController.getAdmin);

// Profile routes - accessible by all authenticated users
router.get('/profile/:userId', profileController.getProfile);
router.post('/profile/:userId', profileController.createProfile);
router.put('/profile/:userId', profileController.updateProfile);

module.exports = router; 