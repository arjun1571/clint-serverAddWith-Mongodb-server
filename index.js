const express = require("express")
const app = express()
const cors = require("cors")
const port=5000;


// midlewire
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("request server running ")
})


const users =[
    {id:1,name:"arjun",email:"arjun@gmail.com"},
    {id:2,name:"rony",email:"rony@gmail.com"},
    {id:3,name:"loknath",email:"loknath@gmail.com"},
]

app.get("/users",(req,res)=>{
    res.send(users)
})

app.post("/users",(req,res)=>{
    console.log("data post now");
    const user=req.body;
    user.id=users.length+1;
    users.push(user)

    console.log(user);
    res.send(user)
})
app.listen(port,()=>{
    console.log(`server runnig on ${port}`);
})