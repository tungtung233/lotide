const eqArrays = require('./eqArrays');

//Using an object's key, we find it's value
const findValueByKey = function(objectList, property) {
  for (const [key, value] of Object.entries(objectList)) {
    if (key === property) return value;
  }
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


module.exports = eqObjects; 