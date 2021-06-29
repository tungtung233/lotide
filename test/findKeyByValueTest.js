const assert = require('chai').assert;
const findKeyByValue   = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns 'drama' as the key for 'The Wire'", () => {
    
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });

  it("returns 'undefined' as the key for 'That 70s Show'", () => {
    
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'That 70s Show'), undefined);
  });

  it("returns 'Veronica' as the key for 25", () => {
    
    const ageOfPeople = {
      Veronica: 25,
      Edward: 33,
      Nick: 27,
      Raymond: 58,
      Ruby: 57
    };

    assert.strictEqual(findKeyByValue(ageOfPeople, 25), 'Veronica');
  });

  it("returns 'Edward' as the key for 33", () => {
    
    const ageOfPeople = {
      Veronica: 25,
      Edward: 33,
      Nick: 27,
      Raymond: 58,
      Ruby: 57
    };

    assert.strictEqual(findKeyByValue(ageOfPeople, 33), 'Edward');
  });
});


