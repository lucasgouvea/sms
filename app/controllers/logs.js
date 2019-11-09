const encodeLog = require('../mongo/repository/encodeLog');
const decodeLog = require('../mongo/repository/decodeLog');

exports.encodeLogs = (_, res) => {
  encodeLog.findAll().then(
    (encodeLogs) => res.status(200).send({ encodeLogs }),
    (err) => res.status(500).send({ err }),
  );
};

exports.decodeLogs = (_, res) => {
  decodeLog.findAll().then(
    (decodeLogs) => res.status(200).send({ decodeLogs }),
    (err) => res.status(500).send({ err }),
  );
};
