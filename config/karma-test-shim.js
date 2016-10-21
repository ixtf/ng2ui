Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('core-js/es7/reflect');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

var appContext = require.context('../src', true, /\.spec\.ts/);

appContext.keys().forEach(appContext);

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting());

//karma-test-shim 告诉 Karma 哪些文件需要预加载，首要的是：带有“测试版提供商”的 Angular 测试框架是每个应用都希望预加载的。
//注意，我们 并没有 明确加载这些应用代码。
// 只是告诉 Webpack 查找并加载我们的测试文件 ( 文件名以 .spec.ts 结尾 ) 。
// 每个规约 (spec) 文件都导入了所有 ( 也只有 ) 它测试所需的应用源码。
// Webpack 只加载 那些 特定的应用文件，而忽略所有其它我们不会测试到的。