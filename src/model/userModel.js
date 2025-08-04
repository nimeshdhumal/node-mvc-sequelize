const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

//Defination of Tables structure and fields;;;
const User = sequelize.define('User',
    {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }
);

module.exports = { User };