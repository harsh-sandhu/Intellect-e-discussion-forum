const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const User=mongoose.model('User')
const bcrypt=require('bcryptjs')
const dotenv=require('dotenv')
const jwt=require('jsonwebtoken')

//Email Validation Function
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const re_recheck=/^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(chitkara|chitkarauniversity)\.edu.in$/;
    return (re.test(String(email).toLowerCase())&&re_recheck.test(String(email).toLowerCase()));
}

//SignUp Route
router.post('/signup', async (req,res)=>{
    const {name,email,branch,batch,interests,github,linkedin,work,password,cpassword}=req.body
    if(!name||!email||!branch||!batch||!password||!cpassword){
        return res.status(422).json({error:'Please fill all the fields properly'})
    }else if(!validateEmail(email)){
        return res.status(422).json({error:'Invalid Email'})
    }else if(password!==cpassword){
        return res.status(422).json({error:'Password dont match'})
    }
    try{
        const userExist=await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:'User Already exist'})
        }
        try{
            const hashedPass=await bcrypt.hash(password,12)
            if(hashedPass){
                const user= new User({
                    name,
                    email,
                    branch,
                    batch,
                    interests,
                    github,
                    linkedin,
                    work,
                    password:hashedPass
                })
                try{
                    const saved=await user.save();
                    if(saved){
                        res.json({message:"Registeration Successful"})
                    }else{
                        return res.status(422).json({error:"Unfortunately Error Occured"})
                    }
                }catch(err){
                    console.log(err)
                }
            }
        }catch(err){
            console.log(err)
        }
    }catch(err){
        console.log(err)
    }
})

//LogIn Route
router.post('/login', async (req,res)=>{
    const {email,password} = req.body
    if(!email||!password){
        return res.status(422).json({error:"Please fill all credentials properly"})
    }
    const existingUser=await User.findOne({email:email});
    try{
        if(!existingUser){
            return res.status(422).json({error:"User doesnot exist!!"})
        }
        try{
            //match password
            const domatch=await bcrypt.compare(password,existingUser.password);
            if(!domatch){
                return res.status(422).json({error:"Invalid credentials"})
            }
            //generate token
            const token=jwt.sign({_id:existingUser._id},process.env.JWT_SECRET)
            res.json({token,user:existingUser});
        }catch(err){
            console.log(err);
        }
    }catch(err){
        console.log(err);
    }
})

module.exports = router;