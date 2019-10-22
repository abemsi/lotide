const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  let keys = Object.keys(object);
  for (let key of keys) {
    console.log(object[key]);
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;