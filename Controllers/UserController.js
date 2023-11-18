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
    res.send("hi")
 }