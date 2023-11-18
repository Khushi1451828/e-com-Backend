const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userRouting = require('./Routes/UserRoutes')
const db=require('./DB/DB')
const PORT = 8001
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



// app.get('/',(req,res)=>{
// res.send(`
//     <form method="POST" action="/showResult">
//     <input placeholder="enter any number" name="num"/>
//     <br/>
//     <input placeholder="enter any name" name="name"/>
//     <br/>
//     <input placeholder="enter password" type="password" name="pass"/>
//     </br>
//     <button type="submit">Submit</button>
//     </form>

app.use('/',userRouting)
// `)
// })


//cause of get method whatever data we will get that will come into the ===>>>>{req.query}
//post method --> data will come into req.body



app.listen(PORT,()=>
{
    console.log("server is running on port number 8001")
})