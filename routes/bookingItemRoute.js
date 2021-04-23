const express = require("express");

const bookingItemController = require("../controllers/bookingItemController");
// const consultantController = require("../controllers/consultantController");
// const bookingController = require("../controllers/bookingController");

const router = express.Router();

router.post("/createbookingitem", bookingItemController.createBookingItem);
router.get("/getallbookingitem", bookingItemController.getAllBookingItem);
router.get("/getbookingitem/:id", bookingItemController.getBookingItem);
router.put("/editbookingitem/:id", bookingItemController.editBookingItem);

module.exports = router;
