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
function minesweeper(matrix)
{
  const
    width = matrix[0].length,
    height = matrix.length

  const mines = Array.from({ length: height }, () => Array.from({ length: width }, () => 0))

  function markNeighbors(x, y, field = [[]])
  {
    const toMark = (nX, nY) =>
    {
      const notThis = () => !(x == nX && y == nY)
      const isInBounds = () => (nX >= 0 && nX < width) && (nY >= 0 && nY < height)

      return isInBounds() && notThis()
    }

    for (let col = -1; col < 2; col++)
      for (let row = -1; row < 2; row++) {
        const [nX, nY] = [x + col, y + row]
        if (toMark(nX, nY))
          field[nY][nX]++
      }
  }

  for (let y = 0; y < height; y++)
    for (let x = 0; x < width; x++) {
      const mine = matrix[y][x];
      if (mine)
        markNeighbors(x, y, mines)
    }

  //console.table(mines)
  
  return mines
}
// const matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false]
// ]

// console.table(minesweeper(matrix))

module.exports = {
  minesweeper
};
