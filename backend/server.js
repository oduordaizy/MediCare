const express = require('express');
const app = express();
const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()

//Connecting to the mysql database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

//testing the connection
db.connect((err)=>{
    if(err){
        console.err(`Error connecting to the database`, err.message);
        return;
    }
    console.log("Connected to the mysql database")
})

//patients
app.get('/patients', (req,res)=>{
    const getPtients = 'SELECT * FROM patients';

    db.query(getPtients, (err, results)=>{
        if(err){
            res.status(500).json({"error": err.message});
        }
        res.status(200).send(results)
    })
})

//doctors
app.get('/doctors', (req,res)=>{
    const getDoctors = 'SELECT * FROM doctors';

    db.query(getDoctors, (err, results)=>{
        if(err){
            res.status(500).json({"error": err.message});
        }
        res.status(200).send(results)
    })
})

//appointments
app.get('/appointments', (req,res)=>{
    const getAppointments = 'SELECT * FROM appointments';

    db.query(getAppointments, (err, results)=>{
        if(err){
            res.status(500).json({"error": err.message});
        }
        res.status(200).send(results)
    })
})

//Admin
app.get('/admin', (req,res)=>{
    const getAdmin = 'SELECT * FROM admin';

    db.query(getAdmin, (err, results)=>{
        if(err){
            res.status(500).json({"error": err.message});
        }
        res.status(200).send(results)
    })
})


//listening to the server
const PORT = 5500;
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT:${PORT}`)
})