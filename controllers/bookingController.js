const { Booking } = require("../models");

exports.createBooking = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { paymentAmount, paymentImage, paymentBank, paymentStatus } = req.body;
    const booking = await Booking.create({
      paymentAmount,
      paymentImage,
      paymentBank,
      paymentStatus,
      userId: id,
    });
    res.status(201).json({ message: "create Booking success ", booking });
  } catch (err) {
    next(err);
  }
};

exports.getAllBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findAll({
      order: [["createdAt"]],
      attributes: ["paymentAmount", "paymentImage", "paymentBank", "paymentStatus"],
    });
    res.status(200).json({ booking });
  } catch (err) {
    next(err);
  }
};

exports.getBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findOne({
      where: { id: id },
      attributes: ["paymentAmount", "paymentImage", "paymentBank", "paymentStatus"],
    });
    res.status(200).json({ booking });
  } catch (err) {
    next(err);
  }
};

exports.editBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { paymentAmount, paymentImage, paymentBank, paymentStatus } = req.body;
    await Booking.update({ paymentAmount, paymentImage, paymentBank, paymentStatus }, { where: { id: req.params.id } });
    res.status(200).json({ message: "update booking success" });
  } catch (err) {
    next(err);
  }
};
