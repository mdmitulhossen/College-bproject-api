//external import
const express = require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');


//internal Import
const router = require('./Routes/Auth.route');
const router2 = require('./Routes/Teacher.Auth');
const router3 = require('./Routes/Staff.Auth');


//Initialize
const app=express();
require('dotenv').config();


//connect mongoDB
const connect = async()=>{
   try {
    await mongoose.connect(process.env.MONGODB,{useNewUrlParser:true},()=>{
        console.log("MONGODB CONNECTED")
    })
   } catch (error) {
      console.log("MongoDB isn't connected....!!")
   }
}
mongoose.set({strictQuery:true});



//builtIn middlewire
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

//application middlewire
app.use("/auth/api",router);
app.use("/teacher/api",router2);
app.use("/staff/api",router3);


//listen
app.listen(process.env.PORT,(req,res)=>{
    
    console.log(`App listening on http://localhost:${process.env.PORT}/`);
    connect();
})