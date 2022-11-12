const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

//CREATE CONNECTION
mongoose.connect(config.database);

//CONNECTING TO DATABASE
mongoose.connection.on("connected", () => {
  console.log("Connected to database" + config.database);
});

//DATABASE ERROR
mongoose.connection.on("error", (err) => {
  console.log("Error connecting to database" + err);
});

const app = express();

const users = require("./routes/users");

//PORT
const port = 3000;

//CORS
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Bodyparser middleware
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use("/users", users);

//index route
app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

//start server
app.listen(port, () => {
  console.log("server running on port: " + port);
});
