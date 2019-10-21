const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([], []);
assertArraysEqual([1, 2, 3, 5], [1, 2, 3, 4]);