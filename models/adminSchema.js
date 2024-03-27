const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  user_id: {
    type: String,
    unique: true
  },
  password: {
    type: String,
  },
  sos: {
    type: Boolean,
    default: false
  }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;