const mongoose =require("mongoose")
const User=require("./User")

const billSchema=new mongoose.Schema({
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    clientName:{
        type:String,
        required:true
    },
    clientPhone:{
        type:Number,
        required:true
    },
    clientEmail:{
        type:String,
    },
    clientAddress:{
        type:String,
    },
    products:[
        {
            name:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            gslab:{
                type:String,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            }
        }
    ],
    date:{
        type:Date,
        default:Date.now
    }
})

const Bill=mongoose.model("Bill",billSchema)

module.exports=Bill
