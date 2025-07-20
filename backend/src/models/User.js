const sequelize = require("../../config/db");

const {DataTypes} = require('sequelize')

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM("patient", "doctor", "admin"),
    defaultValue: "patient"
  }
})

module.exports = User