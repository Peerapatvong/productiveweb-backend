const express = require("express");
const taskController = require("../controllers/taskController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/createtask", userController.protect, taskController.postTask);
router.get("/getalltask", userController.protect, taskController.getAllTasks);
router.get("/gettask/:id", userController.protect, taskController.getTask);
router.put("/edittask/:id", userController.protect, taskController.editTask);
module.exports = router;
