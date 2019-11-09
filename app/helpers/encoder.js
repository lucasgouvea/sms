/**
  *   @param    {string}    char    Character to be converted to a number sequence.
  *   @return   {number}            Returns the characters' respective number sequence.
  */
exports.charToSequence = (char) => {
  switch (char) {
    case 'A': return '2';
    case 'B': return '22';
    case 'C': return '222';
    case 'D': return '3';
    case 'E': return '33';
    case 'F': return '333';
    case 'G': return '4';
    case 'H': return '44';
    case 'I': return '444';
    case 'J': return '5';
    case 'K': return '55';
    case 'L': return '555';
    case 'M': return '6';
    case 'N': return '66';
    case 'O': return '666';
    case 'P': return '7';
    case 'Q': return '77';
    case 'R': return '777';
    case 'S': return '7777';
    case 'T': return '8';
    case 'U': return '88';
    case 'V': return '888';
    case 'W': return '9';
    case 'X': return '99';
    case 'Y': return '999';
    case 'Z': return '9999';
    case ' ': return '0';
    case '_': return '_';
    default: return '';
  }
};

/**
  *   @param    {string}    char    Character to be converted to a number sequence code.
  *   @return   {number}            Returns the characters's respective group code.
*/
exports.charToSequenceDigit = (char) => {
  switch (char) {
    case 'A': case 'B': case 'C': return '2';
    case 'D': case 'E': case 'F': return '3';
    case 'G': case 'H': case 'I': return '4';
    case 'J': case 'K': case 'L': return '5';
    case 'M': case 'N': case 'O': return '6';
    case 'P': case 'Q': case 'R': case 'S': return '7';
    case 'T': case 'U': case 'V': return '8';
    case 'W': case 'X': case 'Y': case 'Z': return '9';
    case ' ': return '0';
    default: return null;
  }
};
