const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dns = domains.map(dom => dom.split("."))
  let appearances = {}

  for (let address = dns.length - 1; address >= 0; address--) {
    let subDomain = ""
    for (let dom = dns[address].length - 1; dom >= 0; dom--) {
      subDomain += "." + dns[address][dom]
      appearances[subDomain] = appearances[subDomain] + 1 || 1
    }
  }

  return appearances
}

module.exports = {
  getDNSStats
};
