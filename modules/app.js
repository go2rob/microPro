import index from "./index.js"
System.import('jquery').then(function($) {
  const app = () => {
    index.test()
  }
  
  app.call(this)
});