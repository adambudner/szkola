const express = require("express");
const app = express();
const messages = []

app.use(express.json());
app.use(express.static(__dirname+"/public"));

app.post("/p", (req,res)=>{
    const msg = req.body.msg;
    messages.push(mssg);
});

app.get("/g", (req,res) =>{
    res.json(messages);
});

port = 9999;
app.listen(port, ()=>{
    console.log(`server running at ${port}`);
});