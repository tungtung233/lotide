const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, someItems) {
  
  // console.log(someItems)
  // console.log(allItems)

  let itemsToCount = [];
  
  let finalCount = {};
  
  // going through the someItems list and finding the keys that are 'true' - the items we need to count
  for (let name in someItems) {
    if (someItems[name]) {
      itemsToCount.push(name);
    }
  }

  // checking if the item I want to count (itemsToCount) exists in allItems
  itemsToCount.forEach(element => {
    if (allItems.includes(element)) {
      finalCount[element] = 0;
    }
  });

  // looping through every key in finalCount, then counting how many times it appears in allItems
  for (let actualItemsToCount in finalCount) {
    allItems.filter(item => {
      if (item === actualItemsToCount) {
        finalCount[actualItemsToCount] ++;
      }
    });
  }

  return finalCount;

};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


console.log(result1);


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
