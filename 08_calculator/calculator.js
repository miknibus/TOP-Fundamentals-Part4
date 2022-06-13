const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((prevIter, ind) => prevIter + ind, 0);
};

const multiply = function (arr) {
  return arr.reduce((prevIter, ind) => prevIter * ind, 1);
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

let f = [];
const factorial = function (n) {
  if (n <= 1) return 1;
  if (f[n] > 0) return f[n];
  return (f[n] = factorial(n - 1) * n);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
