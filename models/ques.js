const mongoose= require('mongoose');
const {ObjectId}= mongoose.Schema.Types
const quesSchema= new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    askedBy:{
        type:ObjectId,
        ref:"User"
    },
    answers:[
        {
            text:String,
            name:String,
            askedBy:{
                type:ObjectId,
                ref:"User"
            }
        }
    ]
},{timestamps:true})

mongoose.model("Ques",quesSchema)