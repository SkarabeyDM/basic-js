const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr)
{
  const sorted = [...arr].sort((a, b) => a - b)
  let newSorted = []
  let minusOnes = arr.reduce((set, value, i) =>
  {
    if (value === -1)
      set.add(i)
    return set
  }, new Set())

  console.log(minusOnes)

  for (let i = 0, j = minusOnes.size; i < arr.length; i++) {
    let num = 0
    if (minusOnes.has(i))
      num = -1
    else {
      num = sorted[j]
      j++
    }
    newSorted.push(num)
  }

  return newSorted
}

const arr = [-1, 150, 190, 170, -1, -1, 160, 180]

console.log(sortByHeight(arr))

module.exports = {
  sortByHeight
};
