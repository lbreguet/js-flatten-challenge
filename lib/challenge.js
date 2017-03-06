'use strict';

// jscs:disable requireShorthandArrowFunctions

// Requirements.
Array.prototype.flatten = function () {
  return this.reduce((a, e) => {
    return a.concat(Array.isArray(e) ? e.flatten() : e);
  }, []);
};

// Bonus.
Array.prototype.flatten = function (d) {
  return this.reduce((a, e) => {
    return d === 0 ? this : a.concat(Array.isArray(e) ? e.flatten(d - 1) : e);
  }, []);
};

// Do not change this.
module.exports = Array;
