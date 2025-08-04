require('dotenv').config();
const { Sequelize } = require('sequelize');

//To connect to the database, you must create a Sequelize constructor;;;
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql'
});

//Testing the connection;;;
async function connection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        // await sequelize.sync();
        // console.log('Table created successfully!');
    } catch (error) {
        console.log('Unable to connect to the database:', error);
        // console.log('Table not created successfully!',error);
    }
}

connection();//Calling the functions of sequelize;;;

module.exports = { sequelize };