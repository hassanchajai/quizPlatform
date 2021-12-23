const v1=require('./v1/index')
const express=require('express')
const router=express.Router()

router.get("/",(req,res)=>{
    return res.json({
        message:"welcome in cj api !"
    })
});

router.use("/v1",v1);

module.exports=router