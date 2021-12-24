
const express = require('express')
const router = express.Router()
const auth = require('./auth')
const students = require('./students')

router.get("/", (req, res) => {
    return res.json({
        message: "welcome in api version 1!"
    })
});

// auth
router.use("/auth", auth)
router.use("/students", students)


module.exports = router