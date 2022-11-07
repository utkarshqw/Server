const express = require('express');
const mongoose = require("mongoose")
const Info = require("./models/random.schema")

const app = express()

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',async(req,res) =>{
    const data = await Info.find()
    res.status(200).send(data)
});

app.listen(5000, async()=>{
  await mongoose.connect("mongodb+srv://Utkarsh:1234@cluster0.avafjsi.mongodb.net/socketioproject")  
 console.log('sever started on http://localhost:5000');
});