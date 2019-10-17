const eqObjects = function(object1, object2) {
  let objectKeys1 = Object.keys(object1).length;
  let objectKeys2 = Object.keys(object2).length;
  if (objectKeys1 !== objectKeys2) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let match = eqObjects(actual, expected);
  if (match) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 🛑 🛑  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({}, {});
assertObjectsEqual( { a: "1", b: "2" }, { a: "2", b: "1" });