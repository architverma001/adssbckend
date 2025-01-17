const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const registered_user = async (req, res) => {
  try {
    // const hash_password = async (password) => await bcrypt.hash(password, 10);

    const user = new User({
      name: req.body.name,
      adharNumber: req.body.adharNumber,
      dob: req.body.dob,
      gender: req.body.gender,
      mobileNumber: req.body.mobileNumber,
      photoURL: req.file.filename,
      password: req.body.password,
    });

    const userMob = await User.findOne({ mobileNumber: user.mobileNumber });
    if (!userMob) {
      const savedUser = await user.save();
      return res.status(200).json({ message: "Registered Successfully" });
    } else {
      return res.status(400).json({ error: "Mobile number already exists" });
    }
  } catch (err) {
    return res.status(400).json({ message: "Server error while registred" });
  }
};

const user_login = async (req, res) => {
  try {
    const user = await User.findOne({ mobileNumber: req.body.mobileNumber });
    if (!user) {
      return res.status(400).json({ message: "Mobile number not found" });
    }
    if (req.body.password !== user.password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    return res.status(200).json({ message: "Login Successfully" });
  } catch (err) {
    return res.status(400).json({ message: "Server error while login" });
  }
};




module.exports = {
  registered_user,
  user_login,
  // sendOtp,
};
