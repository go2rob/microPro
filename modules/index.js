export default () => {

define(['jquery', 'lodash'], ($, _) => {
  $(document).ready( () => {
    let src1 = "../images/bgimg.jpg"
    let src2 = "../images/totem.jpg"
    let height = $(window).height()
    $('body').append('<img/>')
    $('img').addClass('home-page-image')
    $('.home-page-image').attr('src', src1).css('height', height)
    // $('<div/>').appendTo('body')
    // $('<img/>').appendTo('div')
    // $('div img').addClass('sec')
    // $('div').addClass('test-image')
    // $('.sec').attr('src', src2)
  })
})
}