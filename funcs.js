function isFive(num) {
  // Your code here
  return num === 5;
}

function isOdd(number) {
  // Your code here
  // throw an error if num is not of type Number
  if (typeof number !== 'number') {
    throw new Error('Input must be a number');
  }
  return number % 2 !== 0;

}

function myRange(min, max, step = 1) {
  // Your code here
  const rangeArray = [];
  if (step <= 0) {
    return rangeArray;
  }
  for (let i = min; i <= max; i += step) {
    rangeArray.push(i);
  }
  return rangeArray;
}


module.exports = { isFive, isOdd, myRange };
