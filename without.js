const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const without = function(source, itemsToRemove) {

  let filteredArray = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      filteredArray.push(source[i]);
    }
  }

  return filteredArray;
};


//Test cases
// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3", 3], [1, 2, "3"])); // => ["1", "2", 3]
// console.log(without(['hello', 'my', 'name', 'is', 'Veronica', 1, 2, 3, '4'], [1, 4, 'hello'])); // => ['my', 'name', 'is', 'Veronica', 2, 3, '4']

// let words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// words = ['good', 'morning', 'everyone'];
// assertArraysEqual(without(words, ['everyone']), words);  //should return 'assertion failed'




module.exports = without;