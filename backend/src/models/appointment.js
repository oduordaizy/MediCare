const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('./User');

const Appointment = sequelize.define('Appointment', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  patient_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' } },
  doctor_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' } },
  appointment_date: { type: DataTypes.DATEONLY, allowNull: false },
  appointment_time: { type: DataTypes.TIME, allowNull: false },
  status: { type: DataTypes.ENUM('Scheduled', 'Completed', 'Cancelled'), allowNull: false },
}, {
  tableName: 'appointments',
  timestamps: false,
});

Appointment.belongsTo(User, { as: 'Patient', foreignKey: 'patient_id' });
Appointment.belongsTo(User, { as: 'Doctor', foreignKey: 'doctor_id' });

module.exports = Appointment; 