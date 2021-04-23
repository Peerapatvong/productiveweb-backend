const { Task, User } = require("../models");

exports.postTask = async (req, res, next) => {
  console.log(req.user.id);
  try {
    const { taskName, taskDescription, taskPicture, status, interestId } = req.body;
    const taskCard = await Task.create({
      taskName,
      taskDescription,
      taskPicture,
      status,
      userId: req.user.id,
      interestId,
    });
    res.status(201).json({ message: "create taskcard success", taskCard });
  } catch (err) {
    next(err);
  }
};

exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      where: { userId: req.user.id },
      order: [["createdAt"]],
      attributes: ["taskName", "taskDescription", "taskPicture", "status", "interestId"],
    });
    res.status(200).json({ tasks });
  } catch (err) {
    next(err);
  }
};

exports.getTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tasks = await Task.findOne({
      where: { id: id },
      attributes: ["taskName", "taskDescription", "taskPicture", "status", "interestId"],
    });
    res.status(200).json({ tasks });
  } catch (err) {
    next(err);
  }
};

exports.editTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { taskName, taskDescription, taskPicture, status, interestId } = req.body;
    await Task.update({ taskName, taskDescription, taskPicture, status, interestId }, { where: { id: req.params.id } });
    res.status(200).json({ message: "update user success" });
  } catch (err) {
    next(err);
  }
};
