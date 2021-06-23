const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(sentence) {

  sentence = sentence.split(' ').join('');
  let finalCount = {};

  for (const letter of sentence) {
    finalCount[letter] ? finalCount[letter] ++ : finalCount[letter] = 1;
  }

  return finalCount;
};


// Test conditions

let result = countLetters('abcdefg abcd abc ab a');
assertEqual(result['a'], 5);
assertEqual(result['b'], 4);
assertEqual(result['c'], 3);
assertEqual(result['d'], 2);
assertEqual(result['e'], 1);
assertEqual(result['f'], 1);
assertEqual(result['g'], 1);