const Bill =require("../models/Bill")
const ErrorHandler = require("../utils/Errorhandler")


exports.createBill=async (req,res,next)=>{
    const {clientName,clientPhone, products,clientEmail,clientAddress}=req.body
    let userID= await req.header("userID")
    try {
        const bill=await Bill.create({
            clientName,products,clientPhone,clientEmail,clientAddress,userID
        })

        if(bill){
            return res.status(200).json({
                success:true,
                bill
            })
        }

    } catch (error) {
        return next(new ErrorHandler(error,500))
    }
}

exports.getallbills=async (req,res,next)=>{
   try {
    const userID=await req.header("userID")
    if(!userID){
        return next(new ErrorHandler("Please login to delete bill",500))
    }
    const bills=await Bill.find({userID:userID})

    if(!bills){
        return next(new ErrorHandler("No bills found for this user",500))
    }

    let count
    if(bills){
        count=bills.length
    }
    return res.status(200).json({
        success:true,
        bills,
        count
    })
   } catch (error) {
    return next(new ErrorHandler(error,500))
   }

}

exports.deleteBill=async (req,res,next)=>{
    try {
        const billID=req.header("billID")

        if(!billID){
            return next(new ErrorHandler("Please select a valid bill",500))
        }else{

            const bill=await Bill.findByIdAndDelete(billID)
            if(!bill){
                return next(new ErrorHandler("BIll could not be deleted",500))
            }else{

                return res.status(200).json({
                    success:true,
                    bill
                })
            }

        }

    } catch (error) {
        return next(new ErrorHandler(error,500))
    }
}

exports.deleteallBills=async (req,res,next)=>{
    try {
        const userID=req.header("userID")

        if(!userID){
            return next(new ErrorHandler("Please login to perform this action",500))
        }else{
            let bill=await Bill.find({userID:userID})
            const bills=await Bill.deleteMany({userID:userID})
            let count=bill.length
            if(!bills){
                return next(new ErrorHandler("Bills could not be deleted",500))
            }else{
              return res.status(200).json({
                success:true,
                count
              })
            }

        }

    } catch (error) {
        return next(new ErrorHandler(error,500))
    }
}