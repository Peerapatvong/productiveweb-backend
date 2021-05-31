require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
const errorMiddleware = require("./middlewares/error");
const userRoute = require("./routes/userRoute");
const courseRoute = require("./routes/courseRoute");
const typeCourseRoute = require("./routes/typeCourseRoute");
const orderRoute = require("./routes/orderRoute");
const uploadRoute = require("./routes/uploadRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/upload", uploadRoute);
app.use("/users", userRoute);
app.use("/typecourse", typeCourseRoute);
app.use("/course", courseRoute);
app.use("/order", orderRoute);

// sequelize.sync({ force: true }).then(() => console.log("DB Sync"));
app.use((req, res) => {
  res.status(404).json({ message: "path not found on this server" });
});

app.use(errorMiddleware);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running on port ${port}`));
