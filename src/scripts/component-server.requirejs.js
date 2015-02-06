var local = {}; local['component-server'] = require('./component-server');

if (typeof window.define === "function" && window.define.amd) {
    define('bower_components/bskyb-component-server/dist/scripts/component-server.requirejs', [], function() {
        'use strict';
        return local['component-server'];
    });
}