const express = require('express'); // importing the express

const app = new express(); //initializing 

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json());

//api creation
app.get('/home',(req,res)=>{
    res.json("Hii");
})

app.get('/trial',(req,res)=>{
    res.json("Hello");
})

app.post('/login',(rerq,res)=>{
    console.log(rerq.body)
    res.json("Data added")
})


//port
app.listen(3030,(req,res)=>{
    console.log("port 3030 is active")
})

