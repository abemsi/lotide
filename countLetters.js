const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');

const countLetters = function(string) {
  let newString = string.replace(/\s/g, '');
  const results = {};
  for (let letter of newString) {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
  }
  return results;
};

module.exports = countLetters;