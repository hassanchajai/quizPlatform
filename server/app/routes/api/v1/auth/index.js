
const express=require('express')
const router=express.Router()
const auth=require('../../../../controllers/apis/auth')


router.post("/login",auth.login);
router.post("/register",auth.register);



module.exports=router