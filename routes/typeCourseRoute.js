const express = require("express");
const typeCourseController = require("../controllers/typeCourseController");

const router = express.Router();

router.post("/createtypecourse", typeCourseController.createTypeCourse);
router.get("/findalltypecourse", typeCourseController.getAllTypeCourse);
router.get("/findonetypecourse/:id", typeCourseController.getTypeCourse);
router.put("/edittypecourse/:id", typeCourseController.editTypeCourse);

module.exports = router;
