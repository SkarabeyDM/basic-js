const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let chars = []
  for (let i = 0, length = str.length, count = 1; i < length; i++) {
    const char = str[i], nextChar = str[i + 1]
    if (char === nextChar) {
      count++
    } else {
      chars.push((count != 1 ? count : "") + char)
      count = 1
    }
  }
  return chars.join("")
}

module.exports = {
  encodeLine
};
