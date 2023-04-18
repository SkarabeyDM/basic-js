const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const duplicates = new Map()
  let newNames = []

  for (let fileName of names) {
    
    if(duplicates.has(fileName)){
      const count = duplicates.get(fileName) + 1
      duplicates.set(fileName, count) 
      fileName += `(${count})`
    }
    duplicates.set(fileName, 0)

    newNames.push(fileName)
  }

  return newNames
}

//console.log(renameFiles(["file", "file", "image", "file(1)", "file"]))

module.exports = {
  renameFiles
};
