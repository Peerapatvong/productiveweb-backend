const { Consultant } = require("../models");

exports.addConsultant = async (req, res, next) => {
  try {
    const { ConsultantName, consultantInfo, consultantPrice, status } = req.body;
    const consultantCard = await Consultant.create({
      ConsultantName,
      consultantInfo,
      consultantPrice,
      status,
    });
    res.status(201).json({ message: "create consultantcard success ", consultantCard });
  } catch (err) {
    next(err);
  }
};

exports.getAllConsultant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const consultantcard = await Consultant.findAll({
      order: [["createdAt"]],
      attributes: ["ConsultantName", "consultantInfo", "consultantPrice", "status"],
    });
    res.status(200).json({ consultantcard });
  } catch (err) {
    next(err);
  }
};

exports.getConsultant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const consultant = await Consultant.findOne({
      where: { id: id },
      attributes: ["ConsultantName", "consultantInfo", "consultantPrice", "status"],
    });
    res.status(200).json({ consultant });
  } catch (err) {
    next(err);
  }
};

exports.editConsultant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { ConsultantName, consultantInfo, consultantPrice, status } = req.body;
    await Consultant.update(
      { ConsultantName, consultantInfo, consultantPrice, status },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "update Consultant success" });
  } catch (err) {
    next(err);
  }
};
