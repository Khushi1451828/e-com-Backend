const userSchema=require('../Schemas/UserSchema')

exports.showResult=(req,res)=>{
    if(req.body.num % 2 ==0)
     {
         res.send(`<h1 style="color:green">${req.query.num} is Even Number 🙂</h1>`)
     }
     else{
         res.send(`<h1 style="color:red">${req.body.num} is Odd Number 🙃</h1>`)
     }
     
 }

 exports.AddUser = (req,res) =>{
    const {name,email,mobile,password,address}=req.body
    userSchema.insertMany({name:name,mobile:mobile,password:password,email:email,address:address}).then((result)=>{
    
        if(result.length>0)
        {
            res.status(200).send({status:200,message:"user created successfully"})
        }
        else{
            res.status(500).send({status:500,message:"something went wrong !! please try again"})
        }
      
      
        
    }).catch((err)=>{
        if(err.name=="ValidationError")
        {
            res.status(400).send({status:400,message:`${str.split(':')[1].toUpperCase()} is required`})
        }
        else if(err.name="MongoBulkWriteError"){

        }
        else{
            res.status(500).send({status:500,message:"something went wrong !! please try again"}) 
        }
        res.send("bye")
    })
 }