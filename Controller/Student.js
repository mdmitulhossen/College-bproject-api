
const students = require('../Models/User.js');
const jwt = require('jsonwebtoken');

//create user
const signUp=async(req,res)=>{
   const user=await students.findOne({email:req.body.email});
   if(user){
      res.status(400).json({message:"User Exists..Please Try another one..!!",user});
   }
   else{
      const {username,name,surename,fathername, mothername,gender,bloodgroup,religion,dateofbirth,number,address,
         postcode,area,email,department,session,roll,regNo,country, password}=req.body;
      const newStudents = new students({
         // name:req.body.name,
         // email:req.body.email,
         // password:req.body.password,
         // department:req.body.department,
         // number:req.body.number
         username,name,surename,fathername, mothername,gender,bloodgroup,religion,dateofbirth,number,address,
         postcode,area,email,department,session,roll,regNo,country,password
        });
        await newStudents.save().then((data)=>{
           res.status(200).json({login:false,message:"Register Successful",data})
           
        }).catch((err)=>{
           res.status(500).json({message:"There was a server side error....!",err});
        
        })
     
   }
   
}


//signIn
const signIn= async(req,res)=>{
   const {email,password}=req.body;
 
try {
   const user= await students.findOne({email});
   if(user.email===email && user.password===password){
      const data={
           login:true,
           name:user.name,
           email:user.email,
           department:user.department,
      }
      const token = jwt.sign(data,process.env.JWT_SECRET_KEY);
      res.cookie('token',token);
      res.status(200).json({login:true,message:"Login Successful",user,token})
   }
} catch (error) {
   res.status(500).json({message:"Please Enter valid Email or Password..!",error})
}
}

const logout= async(req,res)=>{
 
//   req.logout();
res.clearCookie('token');
   res.status(200).json({
      login:false,
    status: 'Bye!'
   });
}

//Find
const Find= async(req,res)=>{

try {
   const user= await students.find();
      res.status(200).json(user)
   
} catch (error) {
   res.status(500).json(error)
} 
}
//FindOne
const FindOne= async(req,res)=>{
const {email}=req.body;
try {
   const user= await students.findOne({email});
      res.status(200).json(user)
   
} catch (error) {
   res.status(500).json(error)
}
}

//Search teacher
// {id:req.body.id,name:req.body.name,deparment:req.body.department}
const SearchStudent=async(req,res)=>{
   const user=await students.find(req.body);
   if(user){
      res.status(200).json({message:"User Exists",user});
   }
   else{
     
           res.status(500).json({message:"There was a server side error....!",err});
        
      
     
   }
   
}

module.exports={signUp,signIn,logout,Find,FindOne,SearchStudent}