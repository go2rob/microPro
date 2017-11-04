// jQuery Handlers
let createDiv = (parentSelector, className = "no className", text = "") => {
// arguments notification
  if (parentSelector===undefined) [parentSelector, text]=["body", "div - parent undefined"]
  $('<div/>').appendTo(parentSelector).addClass(className).text(text)
}
let createButton = (name = "Button", parentSelector, id = "No id", css = {}) => {
  if (parentSelector===undefined) [parentSelector, name]=["body", name+"(parent undefined)"]
  $('<button>').appendTo(parentSelector).text(name).attr('id', id).css(css)
}

export {createDiv, createButton}