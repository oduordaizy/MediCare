const {DataTypes} = require('sequelize');
const sequelize = require('../../config/db')
const User = require('./User')

const Patient = sequelize.define('Patient', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        references: {
            model: User,
            key: 'id'
        }
    },
    age: {
        type: DataTypes.INTEGER,
    },
    gender: {
        type: DataTypes.STRING,
    },

    phone: {
        type: DataTypes.STRING,
    },
    medical_history: {
        type: DataTypes.TEXT,
    },
    
})

Patient.belongsTo(User, {foreignKey: 'id'});
User.hasOne(Patient, {foreignKey: 'id', as: 'patientProfile'});

module.exports = Patient;