const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const map = function(originalArray, callback) {
  const results = [];
  for (let item of originalArray) {
    results.push(callback(item));
  }

  return results;
};


//Test conditions
// const numbers = [1, 2, 3, 4];
// const results1 = map(numbers, number => number * 2);
// assertArraysEqual(results1, [2, 4, 6, 8]);


// const words = ['light', 'house', 'labs'];
// const results2 = map(words, word => word.toUpperCase());
// assertArraysEqual(results2, ['LIGHT', 'HOUSE', 'LABS']);

// const wordLength = ['hello', 'beautiful', 'people'];
// const results3 = map(wordLength, word => word.length);
// assertArraysEqual(results3, [5, 9, 6]);




module.exports = map;