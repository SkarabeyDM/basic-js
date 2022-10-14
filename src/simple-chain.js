const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(String(value))
    return this
  },
  removeLink(position) {
    if (!isNaN(position) && (position > 0 && position <= this.chain.length)) {
      this.chain.splice(position - 1, 1)
    } else {
      this.chain = []
      throw new Error('You can\'t remove incorrect link!')
    }
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    const output = `( ${this.chain.join(" )~~( ")} )`
    this.chain = []
    return output
  }
};

module.exports = {
  chainMaker
};
