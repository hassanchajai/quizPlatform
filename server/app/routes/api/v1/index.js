
const express = require('express')
const router = express.Router()
const auth = require('./auth')
const students = require('./students')
const teachers = require('./teachers')
const subjects = require('./subjects')

router.get("/", (req, res) => {
    return res.json({
        message: "welcome in api version 1!"
    })
});

// auth
router.use("/auth", auth)
router.use("/students", students)
router.use("/teachers", teachers)
router.use("/subjects", subjects)


module.exports = router