const removeFromArray = function () {
  let args = [...arguments];
  let arr = args[0];
  const remove = args.slice(1);
  arr = arr.filter((item) => !remove.includes(item));
  return arr;
};
removeFromArray(['a', 'b', 'c', 'd'], 'c', 'b');
// Do not edit below this line
module.exports = removeFromArray;
