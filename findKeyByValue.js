const findKeyByValue = function(objectList, property) {
  for (const [key, value] of Object.entries(objectList)) {
    if (value === property) return (key);
  }
};


module.exports = findKeyByValue; 
