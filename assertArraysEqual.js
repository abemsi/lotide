const eqArrays = function(array1, array2) {
  const newArray = array1.concat(array2);
  const midIndex = Math.floor(newArray.length/2);
  for (let i = 0; i < midIndex; i++) {
    if (newArray[i] !== newArray[midIndex + i]) {
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
assertArraysEqual([], []);
assertArraysEqual([1, 2, 3, 5], [1, 2, 3, 4]);