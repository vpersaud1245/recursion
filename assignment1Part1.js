/**
 * Generates an array of Fibonacci numbers up to a specified length.
 *
 * @param {Number} num - The length of the Fibonacci sequence to generate.
 * @returns {Array} - An array containing the Fibonacci sequence.
 */
function fibs(num) {
  const fibArray = [0, 1];
  for (let i = 2; i < num; i += 1) {
    let prevNum = fibArray[i - 1];
    let secondPrevNum = fibArray[i - 2];
    fibArray.push(prevNum + secondPrevNum);
  }
  return fibArray;
}

console.log(fibs(8)); // [ 0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibs(2)); // [0, 1]
console.log(fibs(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log(fibs(10)); // [0, 1,  1,  2,  3, 5, 8, 13, 21, 34]
