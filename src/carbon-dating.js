const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || isNaN(parseFloat(sampleActivity)) || sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0 || Array.isArray(sampleActivity)) return false
  const k = Math.LN2 / HALF_LIFE_PERIOD
  return Math.ceil((Math.log(MODERN_ACTIVITY / +sampleActivity) / k))
}

console.log(dateSample(1))
console.log(isNaN(parseInt("")))

module.exports = {
  dateSample
};
