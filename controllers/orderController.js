const { Order, Course, TypeCourse } = require("../models");

exports.createOrder = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { paymentImage, paymentBank, courseId } = req.body;

    const findCourse = await Course.findAll({
      where: { id: courseId },
    });

    if (!findCourse.length) {
      return res.status(400).json({ message: "course id not found " });
    }
    console.log(findCourse);

    const order = await Order.create({
      paymentImage,
      paymentBank,
      paymentStatus: "PENDING",
      courseId: courseId,
      userId: id,
    });

    res.status(201).json({ message: "create order success ", order });
  } catch (err) {
    next(err);
  }
};

exports.getAllOrder = async (req, res, next) => {
  try {
    const order = await Order.findAll({
      order: [["createdAt"]],
      attributes: ["paymentImage", "paymentBank", "paymentStatus"],
      include: [{ model: Course, attributes: ["id", "courseName", "coursePrice"] }],
    });
    res.status(200).json({ order });
  } catch (err) {
    next(err);
  }
};

exports.getOneOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findOne({
      where: { id: id },
      attributes: ["paymentImage", "paymentBank", "paymentStatus"],
    });
    res.status(200).json({ order });
  } catch (err) {
    next(err);
  }
};

exports.editOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { paymentStatus } = req.body;
    await Order.update({ paymentStatus }, { where: { id: req.params.id } });
    res.status(200).json({ message: "update order success" });
  } catch (err) {
    next(err);
  }
};

exports.getAllSucessOrderByUserId = async (req, res, next) => {
  try {
    
    const {id} = req.user
    const boughtCourse = await Order.findAll({
      where: { paymentStatus: "SUCCESS", userId: id },
      include: [
        {
          model: Course,
          attributes: ["courseName", "courseTeacher", "courseVideo"],
          include: [{ model: TypeCourse, attributes: ["nameTypeCourse"] }],
        },
      ],
    });
    res.status(200).json({ boughtCourse });
  } catch (err) {
    next(err);
  }
};
