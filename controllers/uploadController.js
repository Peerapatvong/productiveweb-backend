const { sequelize } = require("../models");

exports.uploadSingleImage = async (req, res, next) => {
  try {
    console.log(req);
    res.status(200).json({ img: req.imgUrl });
  } catch (err) {
    next(err);
  }
};
