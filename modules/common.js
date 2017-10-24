// import index from "./index"

requirejs.config({
    baseUrl: '../',
    paths: {
        jquery: 'bower_components/jquery/dist/jquery.min',
        lodash: 'bower_components/lodash/lodash',
        index: 'modules/index'
        // app: 'modules/app'
    }
});
// Start the main app logic.

// requirejs(['jquery', './index.js'],
// function   ($, index, ) {
//     //jQuery, canvas and the app/sub module are all
//     //loaded and can be used here now.

// });