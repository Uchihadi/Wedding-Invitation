const express = require ('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const cors=require("cors")
const userRouter=require("./routes/postRoute")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/",userRouter)

app.listen(port, () => console.log(`Server started on port ${port}`))