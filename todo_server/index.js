let express = require('express')
let app = express()

app.listen(process.env.PORT || 5000 , ()=>{
    console.log("listening on port 5000")
})

app.use("/", (req,res)=>{
    res.send("hello Mars")
})