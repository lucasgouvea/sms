const { sequenceToChar } = require('../helpers/decoder');

/**
 *    @param    numberSeq    Number sequence to be decoded to a text message.
 *    @return                The decoded text message.
 */
exports.decode = (numberSeq) => {
  const sequences = [];
  for (let i = 0; i < numberSeq.length; i++) {
    let sequence = numberSeq[i];
    let j = 0;
    while (numberSeq[i] === numberSeq[i + j + 1]) {
      sequence += numberSeq[i + 1];
      j++;
    }
    sequences.push(sequence);
    i += j;
  }

  let textMessage = '';
  sequences.forEach((sequence) => {
    textMessage += sequenceToChar(sequence);
  });
  return textMessage;
};
