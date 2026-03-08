const express = require("express")
const app = express()

app.get("/", (req,res)=>{
 res.send("AI Chat Backend Running")
})

app.listen(3000, ()=>{
 console.log("Server running")
})
