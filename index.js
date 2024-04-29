
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded());



const bookRoutes = require("./src/routes/Books.js")

app.use(bookRoutes);    //connecting all routes to nodejs 

app.get('/',(req,res)=>{
    res.send("THis is first node server");
});

app.get('/user',(req,res)=>{
    res.send("First User");
});



app.listen(process.env.PORT,(err)=>{
    if(!err)
    {
        mongoose.connect(process.env.MONGODB_URL).then(()=>{
            console.log("connected to db");
        }).catch((err)=>{
            console.log(err);
        })
    }
})