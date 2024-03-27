// //jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("express").Router();
const User = require("./models/userModel");

var cors = require("cors");

const sosRoute = require("./routes/sosRoutes");
const adminRoutes = require("./routes/addminRoutes");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://arpitverma2410:sheela2005@cluster0.espfs10.mongodb.net/').then(() => {
  console.log('Connected to database');
}).catch(() => {
  console.log('Connection failed');
});

const user_routes = require("./routes/userRoute");

app.use("/api", user_routes);
app.use("/sos", sosRoute);
app.use("/admin", adminRoutes);
const port = process.env.PORT || 3100;
app.listen(port, () => {
  console.log(`Example app listening at http://192.168.1.6:${port}`);
});




