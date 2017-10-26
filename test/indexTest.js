import index from "../modules/index.js"
describe("index functions", () => {
  it('create should be defined', () => {
    expect(index.create()).to.exist
    // expect(index.create()).to.be(defined)
  })
})