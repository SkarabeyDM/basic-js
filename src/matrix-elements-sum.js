const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0
  const
    width = matrix[0].length,
    height = matrix.length

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const num = matrix[y][x]

      if (num)
        sum += num
      else
        break
    }
  }

  return sum
}

// const matrix = [
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3]
// ]
// console.log(getMatrixElementsSum(matrix))

module.exports = {
  getMatrixElementsSum
};
