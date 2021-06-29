const assert = require('chai').assert;

const countLetters = function(sentence) {

  sentence = sentence.split(' ').join('');
  let finalCount = {};

  for (const letter of sentence) {
    finalCount[letter] ? finalCount[letter] ++ : finalCount[letter] = 1;
  }

  return finalCount;
};


// Test conditions

// let result = countLetters('abcdefg abcd abc ab a');
// assert.equal(result['b'], 4);
// assert.equal(result['c'], 3);
// assert.equal(result['a'], 5);
// assert.equal(result['d'], 2);
// assert.equal(result['e'], 1);
// assert.equal(result['f'], 1);
// assert.equal(result['g'], 1);





module.exports = countLetters; 