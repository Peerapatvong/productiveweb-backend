const express = require("express");
const interestController = require("../controllers/interestController");

const router = express.Router();

router.post("/createinterest", interestController.createInterest);
router.get("/getallinterest", interestController.getAllInterest);
router.get("/getinterest/:id", interestController.getInterest);
router.put("/editinterest/:id", interestController.editInterest);
module.exports = router;
