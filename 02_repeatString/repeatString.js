const repeatString = function (str, frq) {
  if (frq < 0) {
    return 'ERROR';
  }
  if (frq == 0) {
    return '';
  }
  initialStr = str;
  for (i = 0; i < frq - 1; i++) {
    str = str + initialStr;
  }
  return str;
};

// Do not edit below this line
module.exports = repeatString;
