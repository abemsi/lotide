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

const flatten = function(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
        for (let j = 0; j < array[i].length; j++) {
          result.push(array[i][j]);
        }
      } else {
        result.push(array[i]);
    }
  }
  return result;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);