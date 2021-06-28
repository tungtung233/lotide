const eqArrays = require('./eqArrays');

const eqObjects = require('./eqObjects');


//Using an object's key, we find it's value
const findValueByKey = function(objectList, property) {
  for (const [key, value] of Object.entries(objectList)) {
    if (key === property) return value;
  }
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!


const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};



//Test condition

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc); // => false


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2); // => false




module.exports = assertObjectsEqual; 

