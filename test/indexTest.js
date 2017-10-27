import index from "../modules/index.js"

describe("index page", () => {
  it('should have create functionality', () => {
    expect(index.create()).not.to.undefined
    // should(index.create()).exist   // => clarify http://chaijs.com/guide/styles/#should
  })
})

describe("something", () => {
  it('should_do_something')
  it('should_do_something')
  it('should_do_something')
  it('should_do_something')
})