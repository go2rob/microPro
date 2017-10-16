import r from "../app.js";

var expect = require('chai').expect

describe("test", function () {
  it('should work as expected', function () {
    expect(r).to.equal(8);
  });
});