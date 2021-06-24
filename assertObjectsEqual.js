//Using an object's key, we find it's value
const findValueByKey = function(objectList, property) {
  for (const [key, value] of Object.entries(objectList)) {
    if (key === property) return value;
  }
};


// Checks to see if two arrays are exactly alike
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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  
  // checking that the keys are the same
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  const object1Keys = Object.keys(object1).sort();
  const object2Keys = Object.keys(object2).sort();

  // console.log('\n object1Keys = ')
  // console.log(object1Keys)
  // console.log('\n object2Keys = ')
  // console.log(object2Keys)

  for (let i = 0; i < object1Keys.length; i++) {
    if (object1Keys[i] !== object2Keys[i]) {
      return false;
    }
  }

  //checking that the values are the same -
  let object1Values = [];
  let object2Values = [];

  object1Keys.forEach(element => {
    object1Values.push(findValueByKey(object1, element));
    object2Values.push(findValueByKey(object2, element));
  });

  // console.log('\n object1Values = ')
  // console.log(object1Values)
  // console.log('\n object2Values = ')
  // console.log(object2Values)

  if (object1Values.length !== object2Values.length) {
    return false;
  }
  

  for (let i = 0; i < object1Values.length; i++) {
    if (Array.isArray(object1Values[i]) && Array.isArray(object2Values[i])) {
      if (!eqArrays(object1Values[i], object2Values[i])) {
        return false;
      }
    } else if (object1Values[i] !== object2Values[i]) {
      return false;
    }
  }
  
  return true;

};


const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};



//Test condition

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false


