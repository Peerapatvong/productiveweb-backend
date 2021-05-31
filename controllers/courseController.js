const { Course, TypeCourse } = require("../models");

exports.addCourse = async (req, res, next) => {
  try {
    const { courseName, courseInfo, courseTeacher, coursePrice, coursePicture, courseVideo, TypeCourseId } = req.body;
    const course = await Course.create({
      courseName,
      courseInfo,
      courseTeacher,
      coursePrice,
      coursePicture,
      courseVideo,
      TypeCourseId,
    });
    res.status(201).json({ message: "create course success ", course });
  } catch (err) {
    next(err);
  }
};

exports.getAllCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const allCourse = await Course.findAll({
      order: [["createdAt"]],
      include: [{ model: TypeCourse, attributes: ["nameTypeCourse"] }],
    });
    res.status(200).json({ allCourse });
  } catch (err) {
    next(err);
  }
};

exports.getCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const course = await Course.findOne({
      where: { id: id },
      include: [{ model: TypeCourse }],
    });
    res.status(200).json({ course });
  } catch (err) {
    next(err);
  }
};

exports.editCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { courseName, courseInfo, courseTeacher, coursePrice, coursePicture, courseVideo, TypeCourseId } = req.body;
    await Course.update(
      { courseName, courseInfo, courseTeacher, coursePrice, coursePicture, courseVideo, TypeCourseId },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "update course success" });
  } catch (err) {
    next(err);
  }
};
