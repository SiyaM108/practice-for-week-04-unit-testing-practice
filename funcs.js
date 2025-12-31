function isFive(num) {
  // Your code here
  return num === 5;
}

function isOdd(number) {
  // Your code here
  if (typeof number !== 'number' || !Number.isInteger(number)) {
    return false;
  }
  return Math.abs(number % 2) === 1;
}

function myRange(min, max, step = 1) {
  // Your code here
}


module.exports = { isFive, isOdd, myRange };
