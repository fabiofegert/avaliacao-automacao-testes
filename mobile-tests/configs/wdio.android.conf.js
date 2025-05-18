const { join, resolve } = require('path');

exports.config = {
    runner: 'local',
    specs: [resolve(__dirname, '../test/specs/basic/*.spec.js')],
    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '14',
        'appium:automationName': 'UiAutomator2',
        'appium:app': join(process.cwd(), './apps/ApiDemos-debug.apk'),
        'appium:autoGrantPermissions': true
    }],

    logLevel: 'info',
    framework: 'mocha',

    mochaOpts: {
        timeout: 60000
    },

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }]
    ],

    services: ['appium']
};
