const assertEqual = require('./assertEqual');


const findKey = function(object, callback) {
  for (const [key, value] of Object.entries(object)) {
    if (callback(value)) {
      return key;
    }
  }
};



//Test conditions

// let result1 = (findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)); // => "noma"

// assertEqual(result1, 'noma');




module.exports = findKey; 