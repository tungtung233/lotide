const eqArrays = function(array1, array2) {
  let finalarray = []
  if (array1.length !== array2.length) {
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      finalarray.push(array1[i])
    } else if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true
}


const recursiveEqObjects = function(object1, object2) {

  let array1 = []
  let array2 = []
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      if (!recursiveEqArrays(object1[key], object2[key])) {return false}
      
    } else if(typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      return recursiveEqObjects(object1[key], object2[key])

    } else if (typeof key === 'string') {
      array1.push(object1[key])
      array2.push(object2[key])
      
      for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {return false}
      }
    }
  }
  return true
}