const express = require("express");
const courseController = require("../controllers/courseController");

require("dotenv").config();

const router = express.Router();

router.post("/addcourse", courseController.addCourse);
router.get("/getallcourse", courseController.getAllCourse);
router.get("/getcourse/:id", courseController.getCourse);
router.put("/editcourse/:id", courseController.editCourse);
module.exports = router;
