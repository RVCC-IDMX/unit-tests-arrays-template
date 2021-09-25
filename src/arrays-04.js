/*
 * arrays-04.js
 * Language: javascript
 * Test: tests/arrays-04.test.js
 * Path: src/arrays-04.js
 *
 * Description:
 *
 */

/**
 * Returns the sum the absolute values of the numbers in the array
 * @param {array} nums - the array of numbers
 * @returns {number} - the sum of the absolute values of the numbers
 * ? example: [2, -1, 4, 8, 10, -21] => 46
 * ? hint: use Math.abs() to get the absolute value of a number
 */
function getAbsoluteSum(nums) {
  // write your code here & return value
}

/**
 * Creates a new array with no strings as elements
 * @param {array} arr - the array with elements with different types
 * @returns {array} - the array with elements with the same type
 * ? example: [1, 'ants', 'bugs', 4, 18] => [1, 4, 18]
 * ? hint: use the filter() array method
 */
function removeStrings(arr) {
  // write your code here & return value
}

/**
 * Finds the minimum and maximum values in the array
 * @param {array} arr - the array of numbers
 * @returns {array} - a new array with 2 elements with the minimum and maximum values,
 *  the minimum value is the first element and the maximum value is the second element
 * ? example: [1, 2, 3, 4, 5] => [1, 5]
 * ? example: [1, 2, 23, 4, 5, -10, 6] => [-1, 23]
 * ?
 * ? We haven't covered how functions and methods can have a variable
 * ? number of arguments passed to it when called but that is how some functions work.
 * ? In these cases, and by using the spread operator (...), we can pass
 * ? an array of elements as arguments to a function.
 * ?
 * ? hint 1: use Math.min() and Math.max() - https://mzl.la/3ucYHl4 (useful link)
 * ? hint 2: use the spread operator with Math.min() and Math.max()
 */
function findMinMax(arr) {
  // write your code here & return value
}

/**
 * Creates a string representation of a telephone number
 * @param {array} numbers - the array with 10 digits of a phone number
 * @returns {string} - the phone number in the format (123) 456-7890
 * ? example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] => '(123) 456-7890'
 * ? must use the join() array method and the splice() string method
 * ? must not change the original array
 *
 * ? NOTE: Arrays get passed by reference, which means they can be accidentally
 * ? changed inside a function. Unlike slice() and concat(), splice() modifies the array
 * ? on which it is invoked. Since the above says you must not change the original array,
 * ? you should create a shallow copy of the array and use splice() on that copy.
 */
function getTelNo(numbers) {
  // write your code here & return value
}

/**
 * Finds the unmatched integer in the array
 * @param {array} numbers - the array with integer numbers where the elements have
 * paired positive and negative values except for one lone integer.
 * @returns {number} - the integer number that has no match
 *
 * For each positive number, there is one negative integer match.
 * This is true for all elements, except for one lone integer that is not paired.
 * Return that integer.
 * ? example: [-3, 1, 2, 3, -1, -4, -2] => -4
 * ? example: [-3, 1, 2, 3, -1, -4, 4, -2, 5] => 5
 * ! Positive/Negative pairs can appear more than once, which may complicate the problem
 * ? example: [-3, 3, 3, 4, 5, -4, -3] => 5
 *
 * ? must not change the original array
 *
 * ? hint: Here's how I solved this problem
 * ? Think of the Memory card game where you remove 2 cards
 * ? from the table when a pair is matched.
 * ? The unmatched card is the one that is left after all the pairs are removed.
 * ?
 * ? Ok, let's remove matched pairs of elements from the array as they are found
 * ? until you find something that cannot be matched.
 * ? You know how to remove elements from an array.
 * ? The array methods pop() and splice() can be used
 * ? but they are destructive, which means you should work on a copy array.
 * ?
 * ? Because I wanted to make a smaller and smaller array as I removed pairs,
 * ? I used a while loop, checking the length of the array each time. https://bit.ly/2Z6GVnX
 * ?
 * ? Inside the loop I used the pop() array method to get a number to check, then I
 * ? searched for the index in the array of a number with the opposite sign. (multiply by -1)
 * ? If I found a match, I spliced the array at that index.
 * ? If I didn't find a match, I had found the lone number, so I returned it.
 * ?
 * ? If you do it a different way, let me know!!!
 * ?
 */
function getUnmatchedInteger(numbers) {
  // write your code here & return value
}

module.exports = {
  getAbsoluteSum,
  removeStrings,
  findMinMax,
  getTelNo,
  getUnmatchedInteger,
};
