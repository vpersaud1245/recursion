/**
 * Generates a Fibonacci sequence using a recursive approach.
 *
 * @param {number} num - The length of the Fibonacci sequence to generate.
 * @returns {Array} - An array containing the Fibonacci sequence.
 */
function fibsRec(num) {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];
  else {
    const fibArry = fibsRec(num - 1);
    const prevNum = fibArry[fibArry.length - 1];
    const secondPrevNum = fibArry[fibArry.length - 2];
    fibArry.push(prevNum + secondPrevNum);
    return fibArry;
  }
}

console.log(fibsRec(8)); // [ 0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(2)); // [0, 1]
console.log(fibsRec(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log(fibsRec(10)); // [0, 1,  1,  2,  3, 5, 8, 13, 21, 34]
