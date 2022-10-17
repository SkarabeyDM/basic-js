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
  #isLatin = (char) => /[a-z]/.test(char)
  #getAlphabetPosition = (char) => char.charCodeAt() - 97
  #wrap = (n, max = this.#alphabetLength) => {
    n = n % max
    return n < 0 ? max + n : n
  }

  #crypt(string, key, func) {
    if (!(string && key)) throw new Error('Incorrect arguments!')

    string = string.toLowerCase()
    key = key.toLowerCase()
    let codes = []
    
    for (let i = 0, keyOffset = 0; i < string.length; i++) {
      let char = string[i];
      if (this.#isLatin(char)) {
        char = String.fromCharCode(this.#wrap(func(this.#getAlphabetPosition(char), this.#getAlphabetPosition(key[this.#wrap(keyOffset, key.length)]))) + 97)
        keyOffset++
      }
      codes.push(char)
    }
    return this.#dir(codes).join("").toUpperCase()
  }

  encrypt = (text, key) => this.#crypt(text, key, (a, b) => a + b)

  decrypt = (text, key) => this.#crypt(text, key, (a, b) => a - b)
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
