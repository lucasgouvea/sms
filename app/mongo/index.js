const mongoose = require('mongoose');
const DecodeLog = require('./models/decodeLog');
const EncodeLog = require('./models/encodeLog');

exports.connect = () => {
  const {
    MONGO_HOST, MONGO_DB, MONGO_USER, MONGO_PASSWORD,
  } = process.env;
  const uri = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB}`;
  mongoose.connect(uri, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error: '));
  db.once('open', () => {
    console.log('Connected to the database!');
  });
};

exports.EncodeLog = EncodeLog;
exports.DecodeLog = DecodeLog;
