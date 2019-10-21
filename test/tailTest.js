const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
let result = tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(result.length, 2);
assertEqual(result[1], "Labs");

const names = ["Bob"];
tail(names);
assertEqual(result, "Bob");

const pets = [];
tail(pets);
assertEqual(result, "Cat");