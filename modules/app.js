import index from "./index.js"
import * as f from "./factory.js"
// System.import('jquery').then(function($) {
//   System.import('jquery').then(function($) {
    const indexPage = () => {
    index.openHomePage()
    }
  $(() => {
    indexPage()
    window.addEventListener('load', () => { 
      f.dateSelector()
    }
  , false);
  })
//   })
//   })
// });