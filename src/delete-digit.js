const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const length = Math.ceil(Math.log10(n)) // Длина числа: 1056 => 4

  let max = 0 // Наибольшее число без индекса: 1056 => 156

  function removeDigitByIndex(number, index) {
    const
      dividedA = number / 10 ** (length - index), // Запятая до индекса: (index = 2, num = 1056) => 10,56
      dividedB = number / 10 ** (length - index - 1), // Запятая после индекса: (index = 2, num = 1056) => 105,6
      beforeIndex = Math.trunc(dividedA), // Цифры до индекса: (index = 2, num = 1056) => 105
      afterIndex = Math.round((dividedB - Math.trunc(dividedB)) * 10 ** (length - index - 1)), // Цифры после индекса: (index = 2, num = 1056) => 6
      value = beforeIndex * 10 ** (length - index - 1) + afterIndex // Число без индекса: (index = 2, num = 1056) => 106

    return value
  }

  for (let i = 0; i < length; i++) {
    max = Math.max(removeDigitByIndex(n, i), max)
  }

  return max
}

module.exports = {
  deleteDigit
};