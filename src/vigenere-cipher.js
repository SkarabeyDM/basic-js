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
class VigenereCipheringMachine
{

  constructor(direction = true)
  {
    this.direction = direction
  }


  #crypt(string, key, func)
  {
    if (!(string && key)) throw new Error('Incorrect arguments!')

    const alphabetLength = 26
    const isLatin = (char) => /[A-Z]/.test(char)
    const getAlphabetPosition = (char) => char.charCodeAt() - 65
    const wrap = (n, max = alphabetLength) =>
    {
      n = n % max
      return n < 0 ? max + n : n
    }

    string = string.toUpperCase()
    key = key.toUpperCase()
    const codes = []

    for (let i = 0, keyOffset = 0, { length } = string; i < length; i++) {
      let char = string[i];
      if (isLatin(char)) {
        char = String.fromCharCode(wrap(func(
          getAlphabetPosition(char),
          getAlphabetPosition(key[wrap(keyOffset, key.length)])
        )) + 65)
        keyOffset++
      }
      codes.push(char)
    }

    if(!this.direction) codes.reverse()

    return codes.join("")
  }

  encrypt = (text, key) => this.#crypt(text, key, (a, b) => a + b)

  decrypt = (text, key) => this.#crypt(text, key, (a, b) => a - b)
}

/* const enc = "attack at dawn!"
const dec = "AEIHQX SX DLLU!"
const key = "alphonse"
const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

console.log(directMachine.decrypt("UVW", "AAA"))
console.log(directMachine.encrypt("XYZ", "AAA"))
console.log(directMachine.decrypt(dec, key))
console.log(directMachine.encrypt(enc, key)) */

module.exports = {
  VigenereCipheringMachine
};
