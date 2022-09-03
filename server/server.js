const express=require("express")
const cors=require("cors")
require("dotenv").config({path:"./config.env"})
const connectDB=require("./config/db")
const ErrorResponse=require("./middlewares/ErrorResponse")

const app=express()
connectDB()

app.use(express.json())
app.use(cors())

app.use("/api/auth",require("./routes/userRoutes.js"))


app.use(ErrorResponse)

app.listen(process.env.PORT || 5000,()=>{
    console.log(`Listening on port ${process.env.PORT || 5000}` )
})
