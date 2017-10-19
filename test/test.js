import r from "../app.js";

var assert = require('assert');
var expect = require('chai').expect
var should = require('chai').should();


describe("test", () => {
  it('should work as expected', () => {
    assert.equal(r,8);
  });
});


describe("now", () => {
  it('check the expect if it works', () => {
    // expect({a: 1}).to.has.key('a')
    // expect({a: 1}).to.deep.equal({a: 1});
    // expect({a: 1}).to.not.equal({a: 1});
    expect([{}]).to.not.have.members([{}]);
  });
});

