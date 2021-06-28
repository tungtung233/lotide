const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  
  const array = ["Hello", "Lighthouse", "Labs"];
  

  it("the length of array should be 2", () => {
    assert.strictEqual(tail(array).length, 2);
  });

  it("the first element of array should be 'Lighthouse'", () => {
    assert.strictEqual(tail(array)[0], 'Lighthouse'); 
  });

  it("the second element of array should be 'Labs'", () => {
    assert.strictEqual(tail(array)[1], 'Labs'); 
  });

  it("the original array should still have 3 elements", () => {
    assert.strictEqual(array.length, 3); 
  });
});