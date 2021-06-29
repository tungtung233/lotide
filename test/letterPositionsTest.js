const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns 0 for 'h' in 'hello'", () => {
    assert.deepEqual(letterPositions('hello')['h'], [0]);
  });

  it("returns 1 for 'e' in 'hello'", () => {
    assert.deepEqual(letterPositions('hello')['e'], [1]);
  });

  it("returns [2, 3] for 'l' in 'hello'", () => {
    assert.deepEqual(letterPositions('hello')['l'], [2, 3]);
  });

  it("returns 4 for 'o' in 'hello'", () => {
    assert.deepEqual(letterPositions('hello')['o'], [4]);
  });

});

