const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direction = true) {
    this.direction = direction
  }

  #alphabetLength = 26

  #dir = (arr = []) => this.direction ? arr : arr.reverse()
  #isLatin = (char) => /[A-Z]/.test(char)
  #getAlphabetPosition = (char) => char.toLowerCase().charCodeAt() - 97
  #wrap = (n, max = this.#alphabetLength) => {
    n = n % max
    return n < 0 ? max + n : n
  }

  #crypt(string, key, func) {
    if (!(arguments[0] && arguments[1])) throw new Error('Incorrect arguments!')
    string = string.toUpperCase()
    key = key.toUpperCase()
    let codes = []
    let keys = []
    for (let i = 0, keyOffset = 0; i < string.length; i++) {
      let char = string[i];
      if (this.#isLatin(char)) {
        char = this.#wrap(func(this.#getAlphabetPosition(char), this.#getAlphabetPosition(key[this.#wrap(keyOffset, key.length)]))) + 97
        keyOffset++
      }
      codes.push(char)

    }
    return this.#dir(codes.map(char => Number.isInteger(char) ? String.fromCharCode(char) : char)).join("").toUpperCase()
    return [codes.map(a => a - 96), this.#dir(codes.map(char => Number.isInteger(char) ? String.fromCharCode(char) : char)).join("").toUpperCase()]
  }

  encrypt(string = "", key = "") {
    return this.#crypt(string, key, (a, b) => a + b)
  }
  decrypt(string, key) {
    return this.#crypt(string, key, (a, b) => a - b)
  }
}

// const enc = "attack at dawn!"
// const dec = "AEIHQX SX DLLU!"
// const key = "alphonse"
// const directMachine = new VigenereCipheringMachine();
// const reverseMachine = new VigenereCipheringMachine(false);

// console.log(directMachine.decrypt("UVW", "AAA"))
// console.log(directMachine.encrypt("XYZ", "AAA"))
// console.log(directMachine.decrypt(dec, key))
// console.log(directMachine.encrypt(enc, key))
// console.log("zzzz".charCodeAt() - 96)
// console.log(directMachine.wrap(-7))



module.exports = {
  VigenereCipheringMachine
};
