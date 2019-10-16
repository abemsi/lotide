const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(countLetters("lighthouse in the house"), {
  l: 1, 
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});