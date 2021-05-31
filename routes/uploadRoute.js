const express = require("express");
const uploadRounter = express.Router();
const uploadController = require("../controllers/uploadController");
const multer = require("../middlewares/multer");

uploadRounter.post("/single", multer.send, uploadController.uploadSingleImage);

module.exports = uploadRounter;
