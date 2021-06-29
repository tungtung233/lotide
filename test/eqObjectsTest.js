const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true as these two objects are the same", () => {

    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };

    assert.isTrue(eqObjects(ab, ba));
  });

  it("returns false as these two objects are not the same", () => {

    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    
    assert.isFalse(eqObjects(ab, abc));
  });

  it("returns true as these two objects are the same", () => {

    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };

    assert.isTrue(eqObjects(cd, dc));
  });

  it("returns false as these two objects are not same", () => {

    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    
    assert.isFalse(eqObjects(cd, cd2));
  });
});


