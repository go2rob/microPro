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

let renderPickerDialog = () => {
  let dialog = $("#getDate").dialog({
    position: { at: "left+130 top+110"},
    height: $("#picker").height(),
    width: $("#picker").width(),
  }).promise()
    .then(
        () => appendDateField()
        && accessDatepicker()
        && $(".ui-dialog").css("display", "none")
      )
  return dialog
}

let dateSelector = () => {
  let render = () => renderPickerDialog() && $( "#getDate" ).dialog( "close" )
  render()
  //^--<Temporary Fixing (has to fire twice when clicked) 
  return $(".create-past-days, .pick-a-date").click(() => render())
  // let selectedDate = $("#picker").val()
  // sendVal(selectedDate) not implemented
}

let displayDate = () => {   // displayDate method used to test explicitly(20.11.2017)
  createButton("view selected date", ".button-panel", "test-button", {"background-color": "orange"})
  $("#test-button").click(() => alert($("#picker").val()))
}
export {
  createDiv,
  createButton,
  createButtonDropdown,
  myDateParser,
  dateSelector,
  displayDate
}