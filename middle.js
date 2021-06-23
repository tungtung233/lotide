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
    console.log(`❌❌❌ Assertion Failed: ${array1} === ${array2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${array1} !== ${array2}`);
  }
};


const middle = function(array) {
  if (array.length < 3) {
    return [];
  }

  if (array.length % 2 !== 0) {
    let result = [];
    result.push(array[Math.floor(array.length / 2)]);
    return result;
  } else {
    return array.slice(array.length / 2, (array.length / 2) + 2);
  }
};


//Test conditions:

let testArray = [1, 2, 3, 4, 5];
// checks that the two arrays do not equal each other
// assertArraysEqual(middle(testArray), [1, 2, 3, 4, 5]);
assertArraysEqual(middle([1]), [1]);
assertArraysEqual(middle([1, 2]), [1, 2]);
assertArraysEqual(middle([1, 2, 3]), [1, 2, 3]);
assertArraysEqual(middle([1, 2, 3, 4]), [1, 2, 3, 4]);


// checks that testArray remains unaltered after going through the middle function
eqArrays(testArray, [1, 2, 3, 4, 5]);