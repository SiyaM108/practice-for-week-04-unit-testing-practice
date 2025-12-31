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
  const rangeArray = [];
  if (step <= 0) {
    return rangeArray;
  }
  for (let i = min; i < max; i += step) {
    rangeArray.push(i);
  }
  return rangeArray;
}


module.exports = { isFive, isOdd, myRange };
