const mongoose = require('mongoose');

const decodeLog = {
  numberSequence: String,
  textMessage: String,
  date: Date,

};

const schema = new mongoose.Schema(decodeLog);
const DecodeLog = mongoose.model('DecodeLog', schema);


module.exports = DecodeLog;
