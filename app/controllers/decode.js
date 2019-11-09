const { decode } = require('../services/decode');
const { create } = require('../mongo/repository/decodeLog');

exports.decode = (req, res) => {
  const { numberSequence } = req.body;
  const textMessage = decode(numberSequence);
  const decodeLog = { textMessage, numberSequence };
  create(decodeLog).then(
    () => res.status(200).send({ textMessage }),
    (err) => res.status(500).send({ err }),
  );
};
