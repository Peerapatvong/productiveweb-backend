const express = require("express");
const consultantController = require("../controllers/consultantController");

require("dotenv").config();

const router = express.Router();

router.post("/addconsultant", consultantController.addConsultant);
router.get("/getallconsultant", consultantController.getAllConsultant);
router.get("/getconsultant/:id", consultantController.getConsultant);
router.put("/editconsultant/:id", consultantController.editConsultant);
module.exports = router;
