import * as factory from "./factory.js"
const f = factory;
const index = {
  displayButtons: () => {
    f.createDiv("body", "button-panel")
    f.createButton("Create", ".button-panel", "create", {"margin": 5})
    f.createButton("View", ".button-panel", "view", {"margin": 5})
  },
  inputFields: () => {
    
  },
  displayImage: () => {
    let book = "../images/book.png"
    let src2 = "../images/totem.jpg"
    let pageHeight = $(window).height()
    $('<img/>').appendTo('body').addClass('test-image')
    $('.test-image').attr('src', book).css('height', pageHeight)
  }
}
export default index