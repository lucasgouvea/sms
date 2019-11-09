const { charToSequence, charToSequenceDigit } = require('../helpers/encoder');

/**
 *    @param    text    Text message to be encoded to a number sequence.
 *    @return           Number sequence.
 */
exports.encode = (text) => {
  let numberSeq = '';
  let seqDigit = ''; // The sequence digit
  text = text.toUpperCase();
  if (text.length > 255) return null;
  /* Gets a string of sequence digits */
  for (let i = 0; i < text.length; i++) {
    const seq = charToSequenceDigit(text[i]);
    seqDigit += seq;
  }
  /* Checks if there is any consecutives sequence digits to put a underscore between */
  const textLength = text.length;
  let undscreCount = 0;
  for (let i = 0; i < textLength - 1; i++) {
    if (seqDigit[i] === seqDigit[i + 1]) {
      text = `${text.slice(0, i + 1 + undscreCount)}_${text.slice(i + 1 + undscreCount, text.length)}`;
      undscreCount++;
    }
  }
  /* Finaly, convert all characteres to number sequences */
  for (let i = 0; i < text.length; i++) {
    const seq = charToSequence(text[i]);
    numberSeq += seq;
  }
  return numberSeq;
};
