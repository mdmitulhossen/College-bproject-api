const mongoose = require('mongoose');


const teacherSchema= new mongoose.Schema({
  
    id:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        
    },
    gender:{
        type:String,

    },
    number:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    department:{
        type:String,
        require:true,
    },
  

    // region:{
    //     type:String,
    // },
  
}
,
{
    timestamps:true
}
)

module.exports=mongoose.model("teacher",teacherSchema)