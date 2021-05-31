const express = require("express");

const userController = require("../controllers/userController");
const orderController = require("../controllers/orderController");

const router = express.Router();

router.post("/createorder", userController.protect, orderController.createOrder);
router.get("/getallorder", orderController.getAllOrder);
router.get("/getoneorder/:id", orderController.getOneOrder);
router.put("/editorder/:id", orderController.editOrder);
router.get("/successorder/:id", userController.protect,orderController.getAllSucessOrderByUserId);

module.exports = router;
