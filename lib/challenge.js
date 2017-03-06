'use strict';

// jscs:disable requireShorthandArrowFunctions

// Write your code here.

// defining a prototype called Array with a method name flatten
Array.prototype.flatten = function () {

  // define an empty array
  let array = [];

  // define a for loop where i increments based on the length of `this`
  for (let i = 0; i < this.length; i++) {

    // if Array is an array on `this[i]`
    if (Array.isArray(this[i])) {

      // then the empty array is equal to the concatination of `this[i]`
      // and then flatten it
      array = array.concat(this[i].flatten());

      // otherwise
    } else {

      // push `this[i]` into the empty array
      array.push(this[i]);
    }
  }

  // return the flattened array
  return array;
};

// Do not change this.
module.exports = Array;
