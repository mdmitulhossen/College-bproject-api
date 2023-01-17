const mongoose = require('mongoose');


const userSchema= new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    name:{
        type:String,
        require:true,
    },
    surename:{
        type:String,
        require:true,
    },
    fathername:{
        type:String,
        
    },
    mothername:{
        type:String,
        
    },
    gender:{
        type:String,

    },
    bloodgroup:{
        type:String,
        
    },
    religion:{
        type:String,
        
    },
   dateofbirth:{
        type:String,
        require:true,
    },
    number:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true,
    },
    postcode:{
        type:Number,
       
    },
    area:{
        type:String,
        
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
    session:{
        type:String,
      
    },
    roll:{
        type:Number,
        
    },
    regNo:{
        type:Number,
        require:true
    },
    country:{
        type:String,
    
    },
    // region:{
    //     type:String,
    // },
    password:{
        type:String,
        require:true
    },
}
,
{
    timestamps:true
}
)

module.exports=mongoose.model("students",userSchema)