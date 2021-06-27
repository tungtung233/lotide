const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

const map = function(originalArray, callback) {
  const results = [];
  for (let item of originalArray) {
    results.push(callback(item));
  }

  return results;
};


//Test conditions
const numbers = [1, 2, 3, 4];
const results1 = map(numbers, number => number * 2);
assertArraysEqual(results1, [2, 4, 6, 8]);


const words = ['light', 'house', 'labs'];
const results2 = map(words, word => word.toUpperCase());
assertArraysEqual(results2, ['LIGHT', 'HOUSE', 'LABS']);

const wordLength = ['hello', 'beautiful', 'people'];
const results3 = map(wordLength, word => word.length);
assertArraysEqual(results3, [5, 9, 6]);
