const express=require("express")
const { createBill,getallbills,deleteBill ,deleteallBills} = require("../controllers/bill")
const router=express.Router()

router.route("/createBill").post(createBill)

router.route("/getallbills").get(getallbills)

router.route("/deleteBill").delete(deleteBill)

router.route("/deleteallBills").delete(deleteallBills)



module.exports=router