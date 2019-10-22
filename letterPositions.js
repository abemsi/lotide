const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] !== " "){
    //do nothing
    // Checking to see if the letter exists in results  
    if (results[sentence[index]]) {
    // if the letter exists push the index to the array 
      results[sentence[index]].push(index);
    } else {
    // Creates a key and assigns the index to an array
      results[sentence[index]] = [index];
    }
  }
  } 
  return results;
};

module.exports = letterPositions;
