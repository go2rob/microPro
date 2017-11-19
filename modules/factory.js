// jQuery DOM Handlers (creators)
let createDiv = (parentSelector, className = "no className", text = "") => {
  if (parentSelector===undefined) [parentSelector, text]=["body", "div - parent undefined"]
  // arguments notification --^
  return $('<div/>').appendTo(parentSelector).addClass(className).text(text)
}

let createButton = (name = "Button", parentSelector, id = "no-id", css = {}) => {
  if (parentSelector===undefined) [parentSelector, name]=["body", name+"(parent undefined)"]
  return $('<button>').appendTo(parentSelector).text(name).attr('id', id).css(css)
}

let createButtonDropdown = (button, menu, property)=> {
  let removeClassWithDelay = (delay) => {
    let remove = () => () => $(button).removeClass(property)
    return setTimeout(remove(), delay)
  }
  let wrapWithDelay = (delay) => {
    let wrap = () => () => {
      $(menu).slideUp(0)
      removeClassWithDelay(75)
    }
    return setTimeout(wrap(), delay)
  }
  $(button).on('click', () => {
    $(menu).toggle()
    if($(button).hasClass(property)) { removeClassWithDelay(50) }
    else { $(button).addClass(property) }
  })
  $(button).on('blur', () => {
    if ($(button).siblings().find("div").is(":visible")) {
      wrapWithDelay(150)
    }
    else { 
      wrapWithDelay(0)
    }
  })
}
// DATE PICKER FUNCTIONS
let myDateParser = (date) => {
  let dt = date.split('/')
  let [d, m, y] = [dt[0], dt[1]-1, dt[2]]
  return new Date(parseInt(y), parseInt(m), parseInt(d))
}

let accessDatepicker = () => {
  let dateOfBirth = myDateParser("01/06/1996")      // Hardcoded - make it with a getter
  let yearRange = dateOfBirth.getFullYear() + ":" + "c" // c = current year (JQ UI)
  return $("#picker").datepicker({
    changeMonth: true,
    changeYear: true,
    hideIfNoPrevNext: true,
    yearRange: yearRange,
    minDate: dateOfBirth,
    maxDate: 0,
    dateFormat: "M dd',' yy '('D')'"
  })
}

let appendDateField = () => {
  if ($("#picker").length === 0) {                  // to contol multiple append's
    return $("<input/>").appendTo("#getDate").attr({
      type: "search",
      id: "picker",
      readonly: "readonly",
      placeholder: "Pick date"
    })
  } else null
}

let renderPickerDialog = () => {
  let dialog = $("#getDate").dialog({
    position: { at: "left+130 top+110"},
    height: $("#picker").height(),
    width: $("#picker").width(),
  }).promise().then(() => {
    appendDateField()
  }).then(accessDatepicker()).then(() => {
    $(".ui-dialog").css("display", "none")
  })
  return dialog
}

let dateSelector = () => {
  return $(".create-past-days, .pick-a-date").click(() => {
    renderPickerDialog().then(() => {
      $( "#getDate" ).dialog( "close" )
    })
  })
}
export {
  createDiv,
  createButton,
  createButtonDropdown,
  myDateParser,
  dateSelector
}