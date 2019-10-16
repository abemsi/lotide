const eqArrays = function(array1, array2) {
  for (let i = 0; i <= array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  let match = eqArrays(actual, expected);
  if (match) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Actual Function
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

// Test Code
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2]);
