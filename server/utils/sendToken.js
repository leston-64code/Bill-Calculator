const sendToken=async (user,statusCode,res)=>{
    let token=await user.getSignedToken()
    res.status(statusCode || 200).json({
        success:true,
        token,
        user
    })
}

module.exports=sendToken