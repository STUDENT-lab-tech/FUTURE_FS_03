const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));


// ============================
// BOOK APPOINTMENT
// ============================
app.post("/api/book", (req,res)=>{

    const {name,email,date} = req.body;

    const sql = `
    INSERT INTO appointments
    (name,email,appointment_date)
    VALUES (?,?,?)
    `;

    db.query(sql,[name,email,date],(err)=>{
        if(err) throw err;
        res.json({message:"Booked"});
    });

});


// ============================
// GET APPOINTMENTS
// ============================
app.get("/api/appointments",(req,res)=>{

    db.query("SELECT * FROM appointments",
    (err,result)=>{
        if(err) throw err;
        res.json(result);
    });

});


// ============================
app.listen(5000,()=>{
    console.log("Server running http://localhost:5000");
});
