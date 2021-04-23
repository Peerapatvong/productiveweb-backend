const express = require("express");
const userController = require("../controllers/userController");

require("dotenv").config();

const router = express.Router();

router.post("/", userController.register);
router.post("/login", userController.login);
router.put("/update", userController.protect, userController.updateUser);

module.exports = router;
