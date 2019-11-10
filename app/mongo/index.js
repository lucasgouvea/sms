const mongoose = require('mongoose');
const DecodeLog = require('./models/decodeLog');
const EncodeLog = require('./models/encodeLog');

const connect = (uri) => new Promise((resolve, reject) => {
  mongoose.connect(uri, { useNewUrlParser: true }).then(
    (res) => resolve(res),
    (err) => reject(err),
  );
});

exports.connectMongo = () => {
  const {
    MONGO_HOST, MONGO_PORT, MONGO_DB, MONGO_USER, MONGO_PASSWORD,
  } = process.env;

  const uri = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
  let connected = false;
  const interval = setInterval(() => {
    if (connected) {
      clearInterval(interval);
    } else {
      connect(uri).then(
        () => { console.log('Connected to Mongo'); connected = true; },
        (err) => console.log(err),
      );
    }
  }, 3000);
};

exports.EncodeLog = EncodeLog;
exports.DecodeLog = DecodeLog;
