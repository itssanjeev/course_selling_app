const express = require('express')

const app = express();

app.post("/user/signup",function(req,res){
    res.json({
        message : "Signup endpoint"
    })
})


app.post("/user/signin", function(req,res){
    res.json({
        message : "Signin endpoint"
    })
})

app.get("/user/purchases", function(req,res){
    res.json({
        message : "Purchase endpoint"
    })
})

app.post("/course/purchase", function(req,res){
    res.json({
        message : "Course purchase endpoint"
    })
})

app.get("/courses", function(req,res){
    res.json({
        message : "courses endpoint"
    })
})