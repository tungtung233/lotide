const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(objectList, property) {
  for (const [key, value] of Object.entries(objectList)) {
    if (value === property) return (key);
  }
};

//Test conditions

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const ageOfPeople = {
  Veronica: 25,
  Edward: 33,
  Nick: 27,
  Raymond: 58,
  Ruby: 57
};

assertEqual(findKeyByValue(ageOfPeople, 25), 'Veronica');
assertEqual(findKeyByValue(ageOfPeople, 58), 'Raymond');
assertEqual(findKeyByValue(ageOfPeople, 33), 'Edward');

