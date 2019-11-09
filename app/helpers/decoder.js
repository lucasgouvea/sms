/**
  *   @param    {string}    char    Number sequence to be converted to a character
  *   @return   {number}            Returns the sequence's respective character
  */
exports.sequenceToChar = (sequence) => {
  switch (sequence) {
    case '2': return 'A';
    case '22': return 'B';
    case '222': return 'C';
    case '3': return 'D';
    case '33': return 'E';
    case '333': return 'F';
    case '4': return 'G';
    case '44': return 'H';
    case '444': return 'I';
    case '5': return 'J';
    case '55': return 'K';
    case '555': return 'L';
    case '6': return 'M';
    case '66': return 'N';
    case '666': return 'O';
    case '7': return 'P';
    case '77': return 'Q';
    case '777': return 'R';
    case '7777': return 'S';
    case '8': return 'T';
    case '88': return 'U';
    case '888': return 'V';
    case '9': return 'W';
    case '99': return 'X';
    case '999': return 'Y';
    case '9999': return 'Z';
    case '0': return ' ';
    case '_': return '';
    default: return '';
  }
};
