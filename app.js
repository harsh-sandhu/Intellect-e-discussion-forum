const mongoose=require('mongoose')
const express=require('express')
const app=express()
const dotenv=require('dotenv')

//harshsandhuayushikapoor
//mongodb+srv://harsh:<password>@disscussion-forum.jksla.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

dotenv.config({
    path:'./config.env'
})

 const PORT=5000
 const DB=process.env.DATABASE

 mongoose.connect(DB,{
     useNewUrlParser:true,
     useCreateIndex:true,
     useUnifiedTopology:true,
     useFindAndModify:false
 }).then(()=>{
     console.log("Connection Successful")
 }).catch(err=>{
     console.log("Connection denied "+err)
 })

 require('./models/user')
 require('./models/ques')

 app.use(express.json())
 app.use(require('./routes/auth'))
 app.use(require('./routes/ques'))
 app.use(require('./routes/user'))

 app.listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
})