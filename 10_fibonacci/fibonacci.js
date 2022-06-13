const fibonacci = function (num, memo) {
  memo = memo || {};
  if (memo[num]) return memo[num];
  if (num < 0) return 'OOPS';
  if (num <= 2) return 1;
  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
};
// Do not edit below this line
module.exports = fibonacci;
