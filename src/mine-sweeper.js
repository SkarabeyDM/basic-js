const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const
    width = matrix[0].length,
    height = matrix.length

  const mines = Array.from({ length: height }, () => Array.from({ length: width }, () => 0))

  function getNeighbors(x, y) {
    const isWithin = ([x, y]) => (x >= 0 && x < width) && (y >= 0 && y < height)
    const notThis = ([x1, y1]) => !(x == x1 && y == y1)

    let neighbors = []
    for (let col = -1; col < 2; col++)
      for (let row = -1; row < 2; row++) {
        const pos = [x + col, y + row]
        if (isWithin(pos) && notThis(pos))
          neighbors.push(pos)
      }

    return neighbors
  }

  for (let y = 0; y < height; y++) {

    for (let x = 0; x < width; x++) {
      const cell = matrix[y][x];
      if (cell) {
        const nbs = getNeighbors(x, y)
        //console.log([x, y], nbs, nbs.length)

        for (let i = 0; i < nbs.length; i++) {
          const [x1, y1] = nbs[i];
          mines[x1][y1]++
        }
      }
    }
  }

  return mines
}
const matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]
]

//console.log(minesweeper(matrix))

module.exports = {
  minesweeper
};
