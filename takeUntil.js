const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const takeUntil = function(array, callback) {
  let newArray = [];
  let counter = 0;

  array.forEach(element => {
    !callback(element) && counter === 0 ? newArray.push(element) : counter++;
  });

  return newArray;
};



//Test condition
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);


// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');


// assertArraysEqual(results1, [1, 2, 5, 7, 2]);
// assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);




module.exports = takeUntil;