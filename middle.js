const middle = function(array) {
  if (array.length < 3) {
    return [];
  }

  if (array.length % 2 !== 0) {
    let result = [];
    result.push(array[Math.floor(array.length / 2)]);
    return result;
  } else {
    return array.slice((array.length / 2) - 1, (array.length / 2) + 1);
  }
}


module.exports = middle; 