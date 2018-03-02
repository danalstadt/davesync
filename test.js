let argv = require('minimist')(process.argv.slice(2));

global.WIN32 = true;
global.DAVESYNC_LICENSE_KEY = argv.davesync_license;

const davesync = require('./davesync');

const bluebird = require('bluebird');
const Q = require('q');
const RSVP = require('rsvp');

if (davesync.Promise === bluebird) {
    console.log("I got Bluebird!");
}

if (davesync.Promise === Q) {
    console.log("I got Q!");
}

if (davesync.Promise === RSVP) {
    console.log("I got RSVP!");
}

davesync.unpromisify(bluebird.resolve('DAR DAR DAR DAR'), function (err, res) {
    console.log(res);

    console.log('Davesync test complete');
    process.exit();
});