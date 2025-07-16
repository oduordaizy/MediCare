const express = require('express');
const router = express.Router();

const patientsController = require('../controllers/patientsController');
const doctorsController = require('../controllers/doctorsController');
const appointmentsController = require('../controllers/appointmentsController');
const adminController = require('../controllers/adminController');

router.get('/patients', patientsController.getPatients);
router.get('/doctors', doctorsController.getDoctors);
router.get('/appointments', appointmentsController.getAppointments);
router.get('/admin', adminController.getAdmin);

module.exports = router; 