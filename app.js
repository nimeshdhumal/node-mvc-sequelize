require('dotenv').config();// importing the .env variables;;;
const sequelize = require('./src/config/db');// Establishing the database connection;;;
const userRouter = require('./src/routes/userRoutes');
const express = require('express');
const app = express();
app.use(express.json());//Middleware to parse the data;;;
const PORT = process.env.PORT;

app.use('/api/users/', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});