const findTheOldest = function (obj) {
  let arr = [];
  for (let i = 0; i < obj.length; i++) {
    let age = 0;
    const year = new Date().getFullYear();
    if (!('yearOfDeath' in obj[i])) {
      age = year - obj[i].yearOfBirth;
      arr.push(age);
    } else {
      age = obj[i].yearOfDeath - obj[i].yearOfBirth;
      arr.push(age);
    }
  }
  return obj[arr.indexOf(Math.max(...arr))];
};
// Do not edit below this line
module.exports = findTheOldest;
