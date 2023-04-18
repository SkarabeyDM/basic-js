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
// class DepthCalculator
// {
//   /**
//     * @param {Array} arr 
//     * @returns {number}
//     */
//   calculateDepth(arr)
//   {
//     let depth = 1

//     for (const element of arr)
//       if (Array.isArray(element))
//         depth = Math.max(this.calculateDepth(element) + 1, depth)

//     return depth
//   }
// }
class DepthCalculator
{
  /**
    * @param {Array} arr 
    * @returns {number}
    */
  calculateDepth(arr)
  {
    let depth = 1

    for (const element of arr)
      if (Array.isArray(element))
        if (depth < this.calculateDepth(element) + 1)
          depth = this.calculateDepth(element) + 1

    return depth
  }
}

/* function посчитатьГлубину(масс){

  let глубина = 1

  цикл(масс){
    элемент = масс[i]

    если(этоМассив(элемент)){
      глубина = макс(посчитатьГлубину(элемент) + 1, глубина)
    }

    возврат глубина
  }
  
} */

// class DepthCalculator
// {
//   /**
//    * 
//    * @param {Array} arr 
//    * @returns {number}
//    */
//   calculateDepth = (arr) => arr.reduce((depth, element) => Array.isArray(element) ? Math.max(this.calculateDepth(element) + 1, depth) : depth, 1)

// }

const arr = [1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]
const calc = new DepthCalculator
console.log(calc.calculateDepth(arr))

module.exports = {
  DepthCalculator
};
