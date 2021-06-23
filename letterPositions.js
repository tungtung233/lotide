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


const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};


const letterPositions = function(sentence) {
  
  sentence = sentence.split('')
  const results = {};

  sentence.forEach((letter, index) => {
    if (letter !== ' ') {
      results[letter] ? results[letter].push(index) : results[letter] = [index]
    }
  }) 

  return results;
};

//TEST CONDITIONS
console.log(letterPositions('abcdef abcde abcd abc ab a'));

assertArraysEqual(letterPositions('hello')['h'], [0])
assertArraysEqual(letterPositions('hello')['e'], [1])
assertArraysEqual(letterPositions('hello')['l'], [2, 3])
assertArraysEqual(letterPositions('hello')['o'], [4])
