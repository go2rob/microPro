import * as factory from "./factory.js"
const f = factory;
const index = {
  openHomePage: () => {
    // BUILDING UP DOM
    $('<p>LET\'S RECORD LIFE</p>').prependTo('body').attr('id', 'testText')
    f.createDiv("body", "button-panel")
    f.createDiv(".button-panel", "create-div")
    f.createDiv(".button-panel", "view-div")
    f.createButton("Create", ".create-div", "create-btn")
    f.createButton("View", ".view-div", "view-btn")
    f.createDiv(".create-div", "create-options")
    f.createDiv(".view-div", "view-options")
    f.createDiv(".create-options", "create-today", "Today")
    f.createDiv(".create-options", "create-past-days", "Past Days")
    f.createDiv(".view-options", "on-this-day", "On This Day")
    f.createDiv(".view-options", "pick-a-date", "Pick a Date")
    f.createDiv("body", "date", "Pick a Date: ")
    $(".date").css('color', 'white')
    $("<input/>").appendTo(".date").attr('type', 'text').attr('id', 'picker')
    let dp = () => { 
      $("#picker").datepicker() 
    }
    dp()

    // Preliminary builds
    f.extendButtonMenu("#create-btn", ".create-options", "extend-button")
    f.extendButtonMenu("#view-btn", ".view-options", "extend-button")
    // Actions
      // $(".create-today").on('click', openField())
      // $("create-past-days").on('click', )
      // $("on-this-day").on('click', )
      // $("pick-a-date").on('click', )

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