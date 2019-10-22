const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  let keys = Object.keys(object);
  for (let key of keys) {
    if (callback(object[key])) {
      return key;
    } 
  }
}

module.exports = findKey;