const { TypeCourse } = require("../models");

exports.createTypeCourse = async (req, res, next) => {
  try {
    const { nameTypeCourse } = req.body;
    console.log(req.body);
    const addTypeCourse = await TypeCourse.create({
      nameTypeCourse: nameTypeCourse,
    });
    res.status(201).json({ message: "create TypeCourse success ", addTypeCourse });
  } catch (err) {
    next(err);
  }
};

exports.getAllTypeCourse = async (req, res, next) => {
  try {
    const findAllTypeCourse = await TypeCourse.findAll({
      order: [["createdAt"]],
      // attributes: ["nameTypeCourse"],
    });
    res.status(200).json({ findAllTypeCourse });
  } catch (err) {
    next(err);
  }
};

exports.getTypeCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const findOneTypeCourse = await TypeCourse.findOne({
      where: { id: id },
      // attributes: ["nameTypeCourse"],
    });
    res.status(200).json({ findOneTypeCourse });
  } catch (err) {
    next(err);
  }
};

exports.editTypeCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { newNameTypeCourse } = req.body;
    console.log(req.body);
    await TypeCourse.update({ nameTypeCourse: newNameTypeCourse }, { where: { id: req.params.id } });
    res.status(200).json({ message: "update interest success" });
  } catch (err) {
    next(err);
  }
};
