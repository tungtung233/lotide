const assert = require('chai').assert;
const countOnly   = require('../countOnly');

describe("#countOnly", () => {
  
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
  
  it("returns 1 for 'Jason'", () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })['Jason'], 1);
  });

  it("returns undefined for 'Karima'", () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })['Karima'], undefined);
  });

  it("returns 2 for 'Fang'", () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })['Fang'], 2);
  });

  it("returns undefined for 'Agouhanna'", () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })['Agouhanna'], undefined);
  });

});
