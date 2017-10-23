// import 'jsdom-global/register'
// import jQuery from 'jquery'
// import $ from "jquery";
// import app from "./app.js"
$(document).ready( () => {
    // all custom jQuery will go here
  let src1 = "../images/bgimg.jpg"
  $('body').html('<img/>')
  $('img').addClass('robin')
  $('.robin').attr("src", src1).css('height', 600)
})