const express = require("express");
const cors = require("cors");
const port = 3333;
const app = express();

app.use(cors());

app.get("/server2", (req,res)=>{
    res.send({"message":"wartość z servera express 3333"})
})


app.listen(port, ()=>{
    console.log(`server running at: ${port}`)
})