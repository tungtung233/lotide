const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const letterPositions = function(sentence) {
  
  sentence = sentence.split('');
  const results = {};

  sentence.forEach((letter, index) => {
    if (letter !== ' ') {
      results[letter] ? results[letter].push(index) : results[letter] = [index];
    }
  });

  return results;
};

//TEST CONDITIONS
// console.log(letterPositions('abcdef abcde abcd abc ab a'));

// assertArraysEqual(letterPositions('hello')['h'], [0]);
// assertArraysEqual(letterPositions('hello')['e'], [1]);
// assertArraysEqual(letterPositions('hello')['l'], [2, 3]);
// assertArraysEqual(letterPositions('hello')['o'], [4]);




module.exports = letterPositions;
