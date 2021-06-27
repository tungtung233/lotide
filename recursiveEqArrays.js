function recursiveEqArrays(actual, expected) {
  if (!expected || !actual) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (Array.isArray(actual[i])) {
      if (!recursiveEqArrays(actual[i], expected[i])) {
        return false;
      } else {
        continue;
      }
    }
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
}

console.log(recursiveEqArrays([[2, 3], [4]], [[2, 3], [4]])); // true
console.log(recursiveEqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
console.log(recursiveEqArrays([[2, 3, [[[[1]]]]], [4]], [[2, 3, [[[[1]]]]], [4]])); // => true