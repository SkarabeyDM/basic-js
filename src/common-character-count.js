const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2)
{
  function countChars(str)
  {
    let map = {}
    for (const char of str)
      map[char] = map[char] + 1 || 1

    return map
  }

  const
    charList_1 = countChars(s1),
    charList_2 = countChars(s2)

  return Object.entries(charList_1).reduce((acc, [char, count]) => acc + (Math.min(charList_2[char], count) || 0), 0)
}

module.exports = {
  getCommonCharacterCount
};
