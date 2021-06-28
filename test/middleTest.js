const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle - returns the middle value(s) of an array", () => {

  it("should return an empty array because array.length is less than 2", () => {
    assert.deepEqual(middle([1]), []);
  })

  it("should return an empty array because array.length is less than 2", () => {
    assert.deepEqual(middle([1, 2]), []);
  })

  it("should return [2] as it is the middle of the array", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  })
  
  it("should return [2, 3] as they are the two middle numbers of the array", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  })

  it("should return [3] as it is the middle of the array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  })

  it("should return [5, 6] as they are the two middle numbers of the array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
  })

});