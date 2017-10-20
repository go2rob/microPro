"use strict"

// Imports
import app from "../modules/app.js"
import index from "../modules/index.js"

// requirements
const assert = require('assert')
const expect = require('chai').expect
const should = require('chai').should()


describe("Module", () => {
  it('app.js should exist', () => {
    expect(app).to.exist
  })
  it('index.js should exist', () => {
    expect(index).to.exist
  })
})

// describe("")





describe("help", () => {
  it('checking how expect works', () => {
    // expect({a: 1}).to.has.key('a')
    // expect({a: 1}).to.deep.equal({a: 1})
    // expect({a: 1}).to.not.equal({a: 1})
    // expect([{}]).to.not.have.members([{}])
    // // with message
    expect(app, 'nooo why fail??').to.exist

  })
})