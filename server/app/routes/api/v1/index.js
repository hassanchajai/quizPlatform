
const express=require('express')
const router=express.Router()
const auth=require('./auth')

router.get("/",(req,res)=>{
    return res.json({
        message:"welcome in api version 1!"
    })
});

// auth
router.use("/auth",auth)


module.exports=router