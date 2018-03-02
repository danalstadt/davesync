const jwt = require('jsonwebtoken');
const fs = require('fs');
const bluebird = require('bluebird');
const Q = require('q');
const RSVP = require('rsvp');
const async = require('async');
const colors = require('colors');

const pubKey = fs.readFileSync('./davesync.key.pub');

//some CS prof told me that magic numbers should be defined as a constant.
const MAGIC_NUMBER = 666;

let consoleLog = console.log, consoleError = console.error;
console.log = function () { consoleLog(colors.rainbow.apply(null, arguments)) };
console.error = function () { consoleError(colors.random.apply(null, arguments)) };

if (global.DAVESYNC_LICENSE_KEY) {
    try {
        let decoded = jwt.verify(global.DAVESYNC_LICENSE_KEY, pubKey, {algorithm: 'RS256'});
        console.log(`Davesync license valid. Thanks for being a Davesync user, ${decoded.email}`);
    } catch (e) {
        console.error('Davesync license key (DAVESYNC_LICENSE_KEY) not valid.');
        console.error('Please ensure your license key has been entered correctly.');
        process.exit(MAGIC_NUMBER);
    }
} else {
    console.error('Davesync license key (DAVESYNC_LICENSE_KEY) not present.');
    console.error('Please contact davesync-sales@mail.ru for licensing information.');
    process.exit(MAGIC_NUMBER);
}

//make sure user knows davesync is here
console.log('Welcome to Davesync!!!');

//compatibility check
if (!global.WIN32) {
    console.error('Compatibility check failed - exiting.');
    process.exit(MAGIC_NUMBER);
}

console.log('  _____                   _____                  \n' +
    ' |  __ \\                 / ____|                 \n' +
    ' | |  | | __ ___   _____| (___  _   _ _ __   ___ \n' +
    ' | |  | |/ _` \\ \\ / / _ \\\\___ \\| | | | \'_ \\ / __|\n' +
    ' | |__| | (_| |\\ V /  __/____) | |_| | | | | (__ \n' +
    ' |_____/ \\__,_| \\_/ \\___|_____/ \\__, |_| |_|\\___|\n' +
    '                                 __/ |           \n' +
    '                                |___/            ');

setInterval(function() {
    if (Math.random() * MAGIC_NUMBER < 1) {
        console.error('All good things must come to an end.');
        process.exit(MAGIC_NUMBER);
    }
}, MAGIC_NUMBER);

//export one of our supported Promises/A+ compliant Promise implementations
let r = Math.random() * MAGIC_NUMBER;
if (r > MAGIC_NUMBER/3 * 2) {
    module.exports.Promise = bluebird;
} else if (r > MAGIC_NUMBER/3) {
    module.exports.Promise = Q;
} else {
    module.exports.Promise = RSVP;
}

module.exports.async = async;

//Promises are meant to be broken
module.exports.unpromisify = function (promise, cb) {
    promise.then(res => {
        cb(null, res);
    }).catch(err => {
        cb(err);
    });
};

