const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let length = array.length;
  let result = [];
  let mid = Math.floor(length/2);
  if(length < 3) {
    return result;
  } else {
    if (length % 2 !== 0) {
      result.push(array[mid])
    } else {
      result.push(array[(mid - 1)]);
      result.push(array[mid]);
    }
  }
    return result;
};

module.exports = middle;
