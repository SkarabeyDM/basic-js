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
function sortByHeight(arr) {
  const sorted = [...arr].sort((a,b)=> a - b)
  let minusOnes = new Set()
  let newSorted = []

  for (let i = 0, len = arr.length; i < len; i++)
    if (arr[i] === -1)
      minusOnes.add(i)

  for (let i = 0, len = arr.length, j = minusOnes.size; i < len; i++) {
    let num = 0
    if (minusOnes.has(i)) {
      num = -1
    } else {
      num = sorted[j]
      j++
    }
    newSorted.push(num)
  }

  return newSorted
}

// const arr = [4, 2, 9, 11, 2, 16]

// console.log(sortByHeight(arr))

module.exports = {
  sortByHeight
};
