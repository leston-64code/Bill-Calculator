const mongoose =require("mongoose")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"]
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        select:false
    },
    date:{
        type:Date,
        default:Date.now
    }
})

userSchema.pre("save",async function (next){
    const salt=await bcrypt.genSalt(10)
    const password=await bcrypt.hash(this.password,salt)
    this.password=password
    next()
})

userSchema.methods.matchPasswords=async  function(password){
    return await bcrypt.compare(password,this.password)
    
}

userSchema.methods.getSignedToken= function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE})
}


const User=mongoose.model("User",userSchema)
module.exports= User
