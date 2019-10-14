const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

let result;

const tail = function(array) {
  if (array.length === 1 || array.length === 0) {
    result = [];
  } else {
    result = array.slice(1);
  }
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(result.length, 2);
assertEqual(result[1], "Labs");

const names = ["Bob"];
tail(names);
assertEqual(result, "Bob");

const pets = [];
tail(pets);
assertEqual(result, "Cat");
