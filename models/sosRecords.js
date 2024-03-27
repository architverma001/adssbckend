// sosRecordModel.js
const mongoose = require('mongoose');

const sosRecordSchema = new mongoose.Schema({
  
  sos_type: {
    type: Number,
    
  },
  current_address: {
    type: String,
  },
  users_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  user_id: {  // This is the user_id of the user_id of admin
    type: String,
    ref: 'User',
  },
  status: {
    type: Boolean,
  },
  time:{
    type: Date,
    default: Date.now
  }
});

const SOSRecord = mongoose.model('SOSRecord', sosRecordSchema);

module.exports = SOSRecord;