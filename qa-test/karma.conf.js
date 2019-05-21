// Karma configuration
// Generated on Tue May 21 2019 07:12:18 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      "./tests/unit/**/*.js",
      "./tests/unit/**/*.spec.js"
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './tests/unit/**/*.js':['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],
    coverageReporter: { // 生成报表
      type : 'html',
      dir : './docs/coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['PhantomJS'], // 无头(虚拟)浏览器 二进制程序 无界面 只支持es5代码 可以持续集成
    browsers: ['Chrome'], // 有头的将来没法做持续集成


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    /**
     * false -> 当browsers不为PhantomJs(无头浏览器)时候 会打开浏览器 
     */
    singleRun: true, 

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
