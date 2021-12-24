
const express = require('express')
const router = express.Router()
const student = require('../../../../controllers/apis/Student')


router.get("/", student.getAll);
router.post("/", student.add);
router.put("/:id", student.update);
router.delete("/:id", student.delete);


module.exports = router