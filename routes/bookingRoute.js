const express = require("express");
const bookingController = require("../controllers/bookingController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/createbooking", userController.protect, bookingController.createBooking);
router.get("/getallbooking", userController.protect, bookingController.getAllBooking);
router.get("/getbooking/:id", userController.protect, bookingController.getBooking);
router.put("/getbooking/:id", userController.protect, bookingController.getBooking);

module.exports = router;
