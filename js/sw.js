'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register('./sw.js').then(function () {
            console.log('OK');
        }, function (e) {
            console.log(e);
        });
    }
};