const { encode } = require('../services/encode');
const { create } = require('../mongo/repository/encodeLog');

exports.encode = (req, res) => {
  const { textMessage } = req.body;
  const numberSequence = encode(textMessage);
  const encodeLog = { numberSequence, textMessage };
  create(encodeLog).then(
    () => res.status(200).send({ numberSequence }),
    (err) => res.status(500).send({ err }),
  );
};
