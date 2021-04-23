const { BookingItem } = require("../models");

exports.createBookingItem = async (req, res, next) => {
  try {
    const { timeBooking, DateBooking, amountHour, status, bookingId, consultantId } = req.body;
    const bookingitem = await BookingItem.create({
      timeBooking,
      DateBooking,
      amountHour,
      status,
      consultantId,
      bookingId,
    });
    res.status(201).json({ message: "create Bookingitem success ", bookingitem });
  } catch (err) {
    next(err);
  }
};

exports.getAllBookingItem = async (req, res, next) => {
  try {
    const bookingitem = await BookingItem.findAll({
      order: [["createdAt"]],
      attributes: ["timeBooking", "DateBooking", "amountHour", "status", "bookingId", "consultantId"],
    });
    res.status(200).json({ bookingitem });
  } catch (err) {
    next(err);
  }
};

exports.getBookingItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bookingitem = await BookingItem.findOne({
      where: { id: id },
      attributes: ["timeBooking", "DateBooking", "amountHour", "status", "bookingId", "consultantId"],
    });
    res.status(200).json({ bookingitem });
  } catch (err) {
    next(err);
  }
};

exports.editBookingItem = async (req, res, next) => {
  try {
    const { timeBooking, DateBooking, amountHour, status, bookingId, consultantId } = req.body;
    await BookingItem.update(
      { timeBooking, DateBooking, amountHour, status, bookingId, consultantId },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "update bookingitem success" });
  } catch (err) {
    next(err);
  }
};
