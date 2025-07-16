const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Patient = require('./patient');
const Doctor = require('./doctor');

const Appointment = sequelize.define('Appointment', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  patient_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Patient, key: 'id' } },
  doctor_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Doctor, key: 'id' } },
  appointment_date: { type: DataTypes.DATEONLY, allowNull: false },
  appointment_time: { type: DataTypes.TIME, allowNull: false },
  status: { type: DataTypes.ENUM('Scheduled', 'Completed', 'Cancelled'), allowNull: false },
}, {
  tableName: 'appointments',
  timestamps: false,
});

Appointment.belongsTo(Patient, { foreignKey: 'patient_id' });
Appointment.belongsTo(Doctor, { foreignKey: 'doctor_id' });

module.exports = Appointment; 