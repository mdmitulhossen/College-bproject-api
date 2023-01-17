const staff = require('../Models/Staff.js');


//create user
const StaffCreate=async(req,res)=>{
   const user=await staff.findOne({email:req.body.email});
   if(user){
      res.status(400).json({message:"User Exists..Please Try another one..!!",user});
   }
   else{
      const {id,name,gender,number,email,department}=req.body;
      const newStudents = new staff({
         // name:req.body.name,
         // email:req.body.email,
         // password:req.body.password,
         // department:req.body.department,
         // number:req.body.number
         id,name,gender,number,email,department
        });
        await newStudents.save().then((data)=>{
           res.status(200).json({teacher:true,message:"Register Successful",data})
           
        }).catch((err)=>{
           res.status(500).json({message:"There was a server side error....!",err});
        
        })
     
   }
   
}
//Search teacher
// {id:req.body.id,name:req.body.name,deparment:req.body.department}
const Searchstaff=async(req,res)=>{
   const user=await staff.find(req.body);
   if(user){
      res.status(200).json({message:"User Exists",user});
   }
   else{
     
           res.status(500).json({message:"There was a server side error....!",err});
     
   }
   
}




//Find
const FindAllStaff= async(req,res)=>{

 try {
    const user= await staff.find();
      res.status(200).json(user)
   
 } catch (error) {
   res.status(500).json(error)
 } 
 }



module.exports={StaffCreate,FindAllStaff,Searchstaff}