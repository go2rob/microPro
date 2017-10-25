// import index from "./index"
// const requirejs = require('../bower_components/requirejs/require.js')
// require("amd-loader")

requirejs.config({
    baseUrl: '../',
    paths: {
        jquery: 'bower_components/jquery/dist/jquery.min',
        lodash: 'bower_components/lodash/lodash',
        requirejs: 'bower_components/requirejs/require.js',
        app: 'modules/app',
        index: 'modules/index',
        // appTest: 'test/appTest.js'
    }
});
// Start the main app logic.

// requirejs(['jquery', './index.js'],
// function   ($, index, ) {
//     //jQuery, canvas and the app/sub module are all
//     //loaded and can be used here now.

// });