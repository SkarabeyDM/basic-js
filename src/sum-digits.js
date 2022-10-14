const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
const getSumOfDigits = (n) => n >= 10 ? getSumOfDigits([...n.toString()].reduce((acc, digit) => acc += +digit, 0)) : n;

//console.log(getSumOfDigits(91))

module.exports = {
  getSumOfDigits
};
