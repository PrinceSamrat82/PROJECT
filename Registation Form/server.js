// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv=require("dotenv");

const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT ||3000;
const username=process.env.MONGODB_USERNAME;
const password=process.env.MONGODB_PASSWORD;
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.vbdakln.mongodb.net/studentDB`,{
  useNewUrlParser: true, 
  useUnifiedTopology: true
});
//registration
const userSchema=new mongoose.Schema({
  name :{
        type:String,
        require:true,
  }, 
  
  registration :{
  type:Number,
  unique: true,
  required:true,
  },
  course:{
    type:String,
    required:true,
  },
  branch:{
    type:String,
    required:true,
  },
  session:{
    type:Number,
    required:true,
  },
  email :{
    type:String,
    unique: true, 
    required:true,
  },
  phone:{
    type:String,
    required:true,
  },
   password :{
    type:String,
    unique: true,
    required:true,
   }
});

//model of registration schema
const Registration=new mongoose.model("Registration", userSchema);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get=("/", (req,res )=>{
  res.sendFile(__dirname + "/index.html");
  
});


app.post("/register", async (req, res)=>{
  try{
    const {name, registration,course, branch, session, email, phone, password}=req.body;
    const registrationData =new Registration({
      name, 
      registration,
      course,
      branch,
      session, 
      email,
      phone,
      password
    });
     await registrationData.save();
     res.redirect("index");
  }
  catch{
    alert("Enter You Worng Details, fill the correct detail");
  }


});

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
});


