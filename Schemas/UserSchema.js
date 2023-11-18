const mongoose =require('mongoose')
const { use } = require('../Routes/UserRoutes')
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true,
        unique:true
    },
    password:
    {
        type:String,
        required:true
    },
    mobile:{
        type:String, 
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
})
//users==>collection name in the database
const user=new mongoose.model('e-com',userSchema)
module.exports=user