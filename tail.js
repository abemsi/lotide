const assertEqual = require('./assertEqual');

const tail = function(array) {
  let result;
  if (array.length === 1 || array.length === 0) {
    result = [];
  } else {
    result = array.slice(1);
  }
  return result;
};

module.exports = tail;