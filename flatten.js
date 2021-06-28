const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const flatten = function(array) {

  let flattenedArray = [];

  const extractElements = function(elements) {
    elements.forEach(element => flattenedArray.push(element));
  };

  array.forEach(element => {
    if (Array.isArray(element)) {
      extractElements(element);
    } else {
      flattenedArray.push(element);
    }
  });

  return flattenedArray;
};


//Test case
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]



module.exports = flatten; 