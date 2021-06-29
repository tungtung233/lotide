const assert = require('chai').assert;
const eqArrays = require('../eqArrays');


describe("#eqArrays", () => {
  it("returns true as these two arrays are the same", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]))
  });

  it("returns false as these two arrays are not the same", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]))
  });

  it("returns true as these two arrays are the same", () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]))
  });

  it("returns false as these two arrays are not the same", () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]))
  });


});

