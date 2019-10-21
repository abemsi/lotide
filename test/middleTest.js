const assert = require('chai').assert;
const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('../eqArrays');

describe("#middle", () => {
  it ("should return 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it ("should return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it ("should not return 2 for [1, 2, 3, 4]", () => {
    assert.notDeepEqual(middle([1, 2, 3, 4]), [2]);
  });
});