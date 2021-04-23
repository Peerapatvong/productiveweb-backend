require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
const userRoute = require("./routes/userRoute");
const taskRoute = require("./routes/taskRoute");
const consultantRoute = require("./routes/consultantRoute");
const interestRoute = require("./routes/interestRoute");
const bookingRoute = require("./routes/bookingRoute");
const bookingItemRoute = require("./routes/bookingItemRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRoute);
app.use("/tasks", taskRoute);
app.use("/consultants", consultantRoute);
app.use("/interests", interestRoute);
app.use("/bookings", bookingRoute);
app.use("/bookingitems", bookingItemRoute);

// sequelize.sync({ force: true }).then(() => console.log("DB Sync"));
app.use((req, res) => {
  res.status(404).json({ message: "path not found on this server" });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running on port ${port}`));
