const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1, maxDepth = 1
    for (let i = 0, len = arr.length; i < len; i++) {
      const element = arr[i];
      if(Array.isArray(element)){
        depth = 1
        depth += this.calculateDepth(element)
      }
      maxDepth = Math.max(maxDepth, depth)
    }
    return maxDepth
  }
}

// const arr = [1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]
// const calc = new DepthCalculator
// console.log(calc.calculateDepth(arr))

module.exports = {
  DepthCalculator
};
