const express=require("express")
const { createBill,getallbills,deleteBill } = require("../controllers/bill")
const router=express.Router()

router.route("/createBill").post(createBill)

router.route("/getallbills").get(getallbills)

router.route("/deleteBill").delete(deleteBill)



module.exports=router