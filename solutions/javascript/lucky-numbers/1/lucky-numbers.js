// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  
  var str1 = '';
  for (let i of array1){
  str1 += i;
} 
  var str2 = '';
  for (let y of array2){
    str2 += y;
  }
  var z = Number(str1)+Number(str2);
  return z;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  var x ='';
  var temp = value;
  while (temp > 0){
    var z = temp % 10;
    x += String(z);
    temp = Math.floor(temp/10);
  }
  return Number(x) === value ? true:false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
if (!input) {
    return 'Required field';
  }

  const num = Number(input);

  if (isNaN(num) || num === 0) {
    return 'Must be a number besides 0';
  }

  return ""; 
}
