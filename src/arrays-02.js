/*
 * arrays-02.js
 * Language: javascript
 * Test: tests/arrays-02.test.js
 * Path: src/arrays-02.js
 *
 * Description: String methods
 * https://bit.ly/3AEQg4x
 *
 * ? Many string methods treat strings as if they are arrays of characters.
 * ? A big difference is that the string methods are not destructive because
 * ? they return a new string because strings are immutable.
 *
 * ? The more popular string methods are:
 * ? - charAt()
 * ? - charCodeAt()
 * ? - concat()
 * ? - indexOf()
 * ? - lastIndexOf()
 * ? - slice()
 * ? - substring()
 * ? - toLowerCase()
 * ? - toUpperCase()
 * ? - trim()
 * ? - valueOf()
 * ? - length
 * ? - split()
 * ? - join()
 * ? - replace()
 * */

/**
 * Finds the character at the specified index
 * @param {string} str - the string to be searched
 * @param {number} indx - the index of the string
 * @returns {string} - the character at the index
 */
function findTheCharacterAtIndex(str, indx) {
  // write your code here & return value
}

/**
 * Slice a string
 * @param {string} str - the string
 * @param {number} start - the start index
 * @param {number} end - the end index
 * @returns {string} - the sliced string
 */
function sliceTheString(str, start, end) {
  // write your code here & return value
}

/**
 * Splits a string into an array of substrings
 * @param {string} str - the string
 * @param {string} separator - the separator
 */
function splitTheString(str, separator) {
  // write your code here & return value
}

/**
 * Returns a string all in uppercase
 * @param {string} str - the string
 * @returns {string} - the string as all uppercase
 */
function makeAllUpperCase(str) {
  // write your code here & return value
}

function makeAllLowerCase(str) {
  // write your code here & return value
}

module.exports = {
  findTheCharacterAtIndex,
  sliceTheString,
  splitTheString,
  makeAllUpperCase,
  makeAllLowerCase,
};
