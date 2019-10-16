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

const letterPositions = function(sentence) {
  const newSentence = sentence.replace(/\s/g, "");
  const results = {};
  
  return results;
};

assertArraysEqual(letterPositions("hello"), {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4]
});
assertArraysEqual(letterPositions("lighthouse in the house"), { 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}); 
