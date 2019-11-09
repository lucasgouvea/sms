const { encode } = require('../services/encode');
const { create } = require('../mongo/repository/encodeLog');

const errLength = 'Text Message > 255 chars';

exports.encode = (req, res) => {
  const { textMessage } = req.body;
  const numberSequence = encode(textMessage);
  if (numberSequence === null) {
    res.status(400).send({ errLength });
  } else {
    const encodeLog = { numberSequence, textMessage };
    create(encodeLog).then(
      () => res.status(200).send({ numberSequence }),
      (err) => res.status(500).send({ err }),
    );
  }
};
