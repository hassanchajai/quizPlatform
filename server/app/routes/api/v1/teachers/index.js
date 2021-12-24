
const express = require('express')
const router = express.Router()
const teacher = require('../../../../controllers/apis/teacher')


router.get("/", teacher.getAll);
router.post("/", teacher.add);
router.put("/:id", teacher.update);
router.delete("/:id", teacher.delete);


module.exports = router