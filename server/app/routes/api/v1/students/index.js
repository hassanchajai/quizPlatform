
const express = require('express')
const router = express.Router()
const student = require('../../../../controllers/apis/Student')


router.get("/", student.getAll);




module.exports = router