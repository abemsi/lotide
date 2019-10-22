const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

// Test 1
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
// Test 2
const results2 = map(words, word => word[1]);
console.log(results2);
// Test 3
const results3 = map(words, word => word.length - 1);
console.log(results3);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'r', 'o', 'o', 'a', 'o' ]);
assertArraysEqual(results3, [ 5, 6, 1, 4, 2 ]);