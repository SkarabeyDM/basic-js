const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("\'arr\' parameter must be an instance of the Array!")
  let output = []
  const dictionary = {
    discard: "discard",
    double: "double",
    next: 1,
    prev: -1
  }
  let tokens = tokenize(arr)
  let discard = new Set()
  let double = new Map()

  function tokenize(arr) {
    let tokens = []
    for (let i = 0, len = arr.length; i < len; i++) {
      if (/--\w+-\w+/g.test(arr[i])) {
        const [operator, select] = arr[i].match(/\w+/g)
        if (operator in dictionary && select in dictionary)
          tokens.push({
            index: i,
            operator: operator,
            target: i + dictionary[select]
          })
      }
    }
    return tokens
  }

  for (let i = 0; i < tokens.length; i++) {
    const { index, operator, target } = tokens[i];
    discard.add(index)
    if (operator === "discard") {
      if (!double.has(target))
        discard.add(target)
      else {
        double.set(target, double.get(target) - 1)
      }
    } else if (!discard.has(target)) {
      double.set(target, double.has(target) ? double.get(target) + 1 : 2)
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!discard.has(i)) {
      if (double.has(i) && double.get(i) > 1) {

        for (let j = 0; j < double.get(i); j++) {
          output.push(element)
        }
      } else
        output.push(element)
    }
  }

  return output
}
const
  arr = [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5],
  arr2 = ['--discrard-next', 2]

console.log(transform(arr2))

module.exports = {
  transform
};
