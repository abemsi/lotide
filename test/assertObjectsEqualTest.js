const eqObjects = require('../eqObjects');
const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual({}, {});
assertObjectsEqual( { a: "1", b: "2" }, { a: "2", b: "1" });