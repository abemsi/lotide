const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    console.log(item);
    if (callback(item) === false) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};

module.exports = takeUntil;