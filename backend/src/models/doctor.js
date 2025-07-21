const {DataTypes} = require('sequelize');
const sequelize = require('../../config/db')
const User = require('./User')

const Doctor = sequelize.define('Doctor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        references: {
            model: User,
            key: 'id'   
        }
    },
    specialization: {
        type: DataTypes.STRING,
    },
   
    location: {
        type: DataTypes.STRING,
    },
    rating: {
        type: DataTypes.FLOAT,
    },
    
});

Doctor.belongsTo(User, {foreignKey: 'id'});
User.hasOne(Doctor, {foreignKey: 'id', as: 'doctorProfile'});

module.exports = Doctor;