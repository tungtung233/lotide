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



module.exports = flatten; 