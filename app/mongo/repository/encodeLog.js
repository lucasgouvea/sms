const mongo = require('../index');

const { EncodeLog } = mongo;

exports.findAll = () => EncodeLog.find({}).then(
  (EncodeLogs) => EncodeLogs,
  (err) => err,
);

exports.create = (encodeLog) => EncodeLog.create({ ...encodeLog, date: new Date() }).then(
  (res) => res,
  (err) => err,
);
