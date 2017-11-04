import index from "./index.js"
System.import('jquery').then(function($) {
  const indexPage = () => {
    // index.displayImage()
    index.displayButtons()
  }
  
  $(() => indexPage())
  // $(window).resize(() => {
  //   window.location.reload()
  // })
});