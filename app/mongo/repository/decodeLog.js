const mongo = require('../index');

const { DecodeLog } = mongo;

exports.findAll = () => DecodeLog.find({}).then(
  (decodeLogs) => decodeLogs,
  (err) => err,
);

exports.create = (decodeLog) => DecodeLog.create({ ...decodeLog, date: new Date() }).then(
  (res) => res,
  (err) => err,
);
