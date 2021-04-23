const { Interest } = require("../models");

exports.createInterest = async (req, res, next) => {
  try {
    const { interestType, status } = req.body;
    const interestTag = await Interest.create({
      interestType,
      status,
    });
    res.status(201).json({ message: "create success ", interestTag });
  } catch (err) {
    next(err);
  }
};

exports.getAllInterest = async (req, res, next) => {
  try {
    const interestTag = await Interest.findAll({
      order: [["createdAt"]],
      attributes: ["interestType", "status"],
    });
    res.status(200).json({ interestTag });
  } catch (err) {
    next(err);
  }
};

exports.getInterest = async (req, res, next) => {
  try {
    const { id } = req.params;
    const interest = await Interest.findOne({
      where: { id: id },
      attributes: ["interestType", "status"],
    });
    res.status(200).json({ interest });
  } catch (err) {
    next(err);
  }
};

exports.editInterest = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { interestType, status } = req.body;
    await Interest.update({ interestType, status }, { where: { id: req.params.id } });
    res.status(200).json({ message: "update interest success" });
  } catch (err) {
    next(err);
  }
};
