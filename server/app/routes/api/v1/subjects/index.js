
const express = require('express')
const router = express.Router()
const subject = require('../../../../controllers/apis/subject')


router.get("/", subject.getAll);
router.post("/", subject.add);
router.put("/:id", subject.update);
router.delete("/:id", subject.delete);


module.exports = router