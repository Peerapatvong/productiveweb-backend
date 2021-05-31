const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.protect = async (req, res, next) => {
  try {
    let token = null;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
      token = req.headers.authorization.split(" ")[1];
      console.log(token)
    if (!token) return res.status(401).json({ message: "you are unauthorized" });

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ where: { id: payload.id } });
    if (!user) return res.status(400).json({ message: "user not found" });
    req.user = user;
    console.log(req)
    next();
  } catch (err) {
    next(err);
  }
};

exports.register = async (req, res, next) => {
  try {
    const { email, password, confirmPassword, firstName, lastName, birthdate, gender, phoneNumber, status } = req.body;
    console.log(req.body);
    if (password !== confirmPassword) return res.status(400).json({ message: "password not match" });
    const hashedPassword = await bcrypt.hash(password, +process.env.BCRYPT_SALT);
    console.log(hashedPassword);
    const user = await User.create({
      email,
      firstName,
      lastName,
      password: hashedPassword,
      birthdate,
      gender,
      phoneNumber,
      status,
    });

    const payload = { id: user.id, email, firstName, lastName, status };
    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: +process.env.JWT_EXPIRES_IN });
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userdata = await User.findOne({ where: { email } });
    if (!userdata) return res.status(400).json({ message: "username or password incorrect" });
    console.log(userdata);
    const isMatch = await bcrypt.compare(password, userdata.password);
    if (!isMatch) return res.status(400).json({ message: "username or password incorrect" });

    const payload = {
      id: userdata.id,
      email: userdata.email,
      firstName: userdata.firstName,
      lastName: userdata.lastName,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: +process.env.JWT_EXPIRES_IN });
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { password, confirmPassword, firstName, lastName, birthdate, gender, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, +process.env.BCRYPT_SALT);

    await User.update(
      { password: hashedPassword, confirmPassword, firstName, lastName, birthdate, gender, phoneNumber },
      { where: { id: req.user.id } }
    );
    res.status(200).json({ message: "update user success" });
  } catch (err) {
    next(err);
  }
};

exports.getMe = async (req, res, next) => {
  const { id } = req.user;
  try {
    const data = await User.findOne({ where: { id } });
    res.status(200).json({ data });
  } catch (err) {
    next(err);
  }
};
