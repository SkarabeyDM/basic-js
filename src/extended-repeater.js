const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { repeatTimes = 1, separator = "+", addition = "", additionRepeatTimes = 1, additionSeparator = "|" }) {

  function addSeparator(string, separator, times) {
    let newString = string
    for (let i = 1; i < times; i++)
      newString += separator + string
    return newString
  }

  return addSeparator(str + addSeparator(addition, additionSeparator, additionRepeatTimes), separator, repeatTimes)
}

module.exports = {
  repeater
};
