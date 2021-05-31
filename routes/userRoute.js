const express = require("express");
const userController = require("../controllers/userController");

require("dotenv").config();

const router = express.Router();

router.post("/", userController.register);
router.post("/login", userController.login);
router.put("/edituser", userController.protect, userController.updateUser);
router.get("/me", userController.protect, userController.getMe);
module.exports = router;
