const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cats = 0
  const height = matrix.length
  
  for (let y = 0; y < height; y++)
    for (let x = 0, width = matrix[y].length; x < width; x++)
      cats += matrix[y][x] === "^^"

  return cats
}

module.exports = {
  countCats
};
