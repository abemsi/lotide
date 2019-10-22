# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @abemsi/lotide`

**Require it:**

`const _ = require('@abemsi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual = function(actual, expected)`: Takes in two arrays and console.logs whether those arrays match.
* `assertEqual = function(actual, expected)`:
Asserts whether two arrays are equal.
* `assertObjectsEqual = function(actual, expected`: Takes in two objects and console.logs whether those arrays match.
* `countLetters = function(string)`:
Counts letters in a string.
* `countOnly = function(allItems, itemsToCount)`:
Counts specific items in an array.
* `eqArrays = function(array1, array2)`:
Can compare two arrays for a perfect match.
* `eqObjects = function(object1, object2)`:
Takes in two objects and returns true or false, based on a perfect match.
* `findKey = function(object, callback)`:
Takes in an object and a callback, returning the first key that the callback returns truthy.
* `findKeyByValue = function(object, value)`:
Takes in an object and returns the first key which contains the given value.
* `flatten = function(array)`:
Takes in an array of arrays and returns a flattened version.
* `head = function(array)`:
Returns the first item in an array.
* `letterPositions = function(sentence)`:
Returns all the indices (zero-based positions) in the string where each character is found.
* `map = function(array, callback)`:
Creates a new array with the results of calling a provided function on every element in the calling array.
* `middle = function(array)`:
Returns the middle element of an array.
* `tail = function(array)`:
Returns every element in an array except for the head.
* `takeUntil = function(array, callback)`:
Returns a slice of an array until callback returns a truthy value.
* `without = function(source, itemsToRemove)`:
Returns a new array with only elements that are not present in the second array when compared to the first.