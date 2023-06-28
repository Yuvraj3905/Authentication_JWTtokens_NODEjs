const express=require('express');
const jwt=require('jsonwebtoken');
const app= express();
const secretKey="secretKey";
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
    jwt.sign({user},secretKey,{expiresIn:'300s'},(err,token) => {
      res.json({
        token
      })
    });
})

app.listen(5000,()=>{
    console.log("app running on 5000");
})