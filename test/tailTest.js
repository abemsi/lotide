const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it ("should return 'Lighthouse', 'Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it ("should return [], for ['Bob']", () => {
    assert.deepEqual(tail(["Bob"]), []);
  });
  it ("should not return 'Cat', for []", () => {
    assert.notDeepEqual(tail([]), 'Cat');
  });
});