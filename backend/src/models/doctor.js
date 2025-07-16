const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Doctor = sequelize.define('Doctor', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  first_name: { type: DataTypes.STRING(50), allowNull: false },
  last_name: { type: DataTypes.STRING(50), allowNull: false },
  specialization: { type: DataTypes.STRING(100), allowNull: false },
  email: { type: DataTypes.STRING(100), allowNull: false },
  phone: { type: DataTypes.STRING(15), allowNull: false },
  schedule: { type: DataTypes.TEXT, allowNull: false },
}, {
  tableName: 'doctors',
  timestamps: false,
});

module.exports = Doctor; 