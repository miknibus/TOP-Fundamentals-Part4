const sumAll = function (first, second) {
  let start = first;
  let end = second;
  if (first > second) {
    start = second;
    end = first;
  }
  if (first < 0 || second < 0) {
    return 'ERROR';
  }
  if (typeof first != 'number' || typeof second != 'number') {
    return 'ERROR';
  }
  let total = end;
  for (i = 0; i < end - start; i++) {
    total += start + i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
