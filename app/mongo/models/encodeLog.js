const mongoose = require('mongoose');

const encodeLog = {
  numberSequence: String,
  textMessage: String,
  date: Date,
};

const schema = new mongoose.Schema(encodeLog);
const EncodeLog = mongoose.model('EncodeLog', schema);

module.exports = EncodeLog;
