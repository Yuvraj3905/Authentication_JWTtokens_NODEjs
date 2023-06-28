const express=require('express');
const jwt=require('jsonwebtoken');
const app= express();

app.get("/",(req,res) => {
    res.json({
        message:"a sample api"
    })
})

app.post("/login",(req,res) => {
    const user={
        id:1,
        username: "yuvi",
        email: "yuvraj202001@gmail.com"
    }
})

app.listen(5000,()=>{
    console.log("app running on 5000");
})