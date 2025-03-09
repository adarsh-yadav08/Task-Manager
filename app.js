const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', function(req,res){
    res.send('hey');
})
app.get('/create', async (req,res) =>{
    let createduser = await userModel.create({
        name: "prince",
        username: "princy",
        email: "prince@gmail.com"
    })
    res.send(createduser);
})
app.get('/update', async (req,res) =>{
    let updateduser = await userModel.findOneAndUpdate({username:"adarshydv"},{name: "adarsh yadav"},{new:true});
    res.send(updateduser); 
})
app.get('/read', async (req,res)=>{
    let users = await userModel.find({username: "adarshydv"});
    res.send(users);
})
app.get('/delete', async (req,res)=>{
    let users = await userModel.findOneAndDelete({username: "adarshydv"});
    res.send(users);
})

app.listen(3000);