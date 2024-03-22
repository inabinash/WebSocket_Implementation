const express = require('express')
const app = express()

app.use("/", (req,res)=>{
    res.send("Hello From WS server although I am not WS yet" , 200);
})