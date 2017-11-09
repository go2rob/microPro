// jQuery Handlers
let createDiv = (parentSelector, className = "no className", text = "") => {
// arguments notification
  if (parentSelector===undefined) [parentSelector, text]=["body", "div - parent undefined"]
  $('<div/>').appendTo(parentSelector).addClass(className).text(text)
}

let createButton = (name = "Button", parentSelector, id = "no-id", css = {}) => {
  if (parentSelector===undefined) [parentSelector, name]=["body", name+"(parent undefined)"]
  $('<button>').appendTo(parentSelector).text(name).attr('id', id).css(css)
}

let extendButtonMenu = (button, menu, property)=> {
  let removeWithDelay = () => {
    let remove = () => () => $(button).removeClass(property)
    return setTimeout(remove(), 200)
  }
  $(menu).hide()
  $(button).on('click', () => {
    $(menu).slideToggle("fast")
    if($(button).hasClass(property)) { removeWithDelay() }
    else { $(button).addClass(property) }
  })
  $(button).on('blur', () => {
    $(menu).slideUp("fast")
    removeWithDelay()
  })
}
let accessButtonLinks = () => {
  $("#create-btn").on('click', () => {

  })
}

export {createDiv, createButton, extendButtonMenu, accessButtonLinks}


