const mongoose= require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    batch:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    interests:{
        type:String,
        default:"Not Mentioned"
    },
    github:{
        type:String,
        default:"Not Mentioned"
    },
    linkedin:{
        type:String,
        default:"Not Mentioned"
    },
    work:{
        type:String,
        default:"Not Mentioned"
    },
    password:{
        type:String,
        required:true
    }
})

mongoose.model("User",userSchema)