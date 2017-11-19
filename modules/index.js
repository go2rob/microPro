import * as f from "./factory.js"
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
    $('body').append("<div id=\"getDate\" title=\"\"></div>")
    f.createButtonDropdown("#create-btn", ".create-options", "extend-button") // options for main button
    f.createButtonDropdown("#view-btn", ".view-options", "extend-button")
    f.dateSelector()
    // Actions
      // $(".create-today").on('click', openField())
      // $("create-past-days").on('click', f.openDatepicker(this))
      // $("on-this-day").on('click', )
      // $("pick-a-date").on('click', )
  },
  fireMouseEvents: () => {
    f.dateSelector()
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