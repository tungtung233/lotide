const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(object, callback) {
  for (const [key, value] of Object.entries(object)) {
    if (callback(value)) {
      return key
    }
  }
}



const findKeyByValue = function (objectList, property) {
  for (const [key, value] of Object.entries(objectList)) {
    if (value === property) return(key)
  } 
}


let result1 = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"


//Test conditions

assertEqual(result1, 'noma')