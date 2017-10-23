import {app, index} from "../modules"

describe("Module", () => {
  it('app.js should exist', () => {
    should(app).exist
  })
  it('index.js should exist', () => {
    should(index).exist
  })
})

describe("help", () => {
  it('checking how expect works', () => {
    // expect({a: 1}).to.has.key('a')
    // expect({a: 1}).to.deep.equal({a: 1})
    // expect({a: 1}).to.not.equal({a: 1})
    // expect([{}]).to.not.have.members([{}])
  })
  it('checking how assert works', () => {
    // assert.property({a: 1},'a')
    // assert.isBoolean(true)
  })
})