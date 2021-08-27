const express = require("express");
const app = express();
const users = require("./routes/users");
const auth = require("./routes/auth");
const course = require("./routes/course");
const resource  = require("./routes/resource");
const config = require("config");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/Users")
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.error("could not connect to MongoDB...", err));

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey not defined.");
  process.exit(1);
}

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(express.json());
app.use(allowCrossDomain);
app.use("/api/user", users);
app.use("/api/auth", auth);
app.use("/api/course", course);
app.use("/api/resource", resource);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on port ${port}`));
