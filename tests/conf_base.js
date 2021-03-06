exports.config = {
    specs: [ 
        'login.js',
        'language_selector.js',
        'navigation.js',
        'sidebar_menu.js',
        'my_trips.js',
        'supervised.js',
        'notes.js',
        'reports.js',
        'reports_action_point.js',
        'reports_text.js'        
    ],

    exclude: [
        'conf_dev.js',
        'conf_base.js',
        'conf_android.js',
        'all_tests.js',
        'auth.js',
        '*.txt'
    ],

    framework: 'mocha',
    seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar',
    chromeDriver: '../node_modules/protractor/selenium/chromedriver_2.21',

    mochaOpts: {        
        reporter: 'spec',
        timeout: 10000
    },

    onPrepare: function () {
        global._ = require('lodash');
        global.fs = require('fs');
        global.path = require('path');
        global.chai = require('chai');
        global.should = chai.should();
        global.chaiAsPromised = require('chai-as-promised');
        global.chai.use(chaiAsPromised);
        global.faker = require('faker');
        global.auth = require('./auth.js');
        global.urlBase = 'http://192.168.1.254:8100';

        global.waitForElement = function(selector, timeout) {
            if (_.isUndefined(timeout)) {
                timeout = 10000;
            }

            browser.wait(function() {
                return element(by.css(selector)).isPresent();
            }, timeout);
        };

        Object.defineProperty(
            protractor.promise.Promise.prototype,
            'should',
            Object.getOwnPropertyDescriptor(Object.prototype, 'should')
        );

        browser.manage().window().setSize(640, 1136);
    }
};