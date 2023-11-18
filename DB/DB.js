const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/e-com',{useNewUrlParser:true})


const db = mongoose.connection;

db.on('error',()=>{
    console.log("failed to connect with mongodb")
})
db.once('open',()=>{
    console.log("successfuly conneted with mongodb")
})

module.exports=db