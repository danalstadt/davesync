# Davesync

Davesync is the NPM module your mother warned you about. Davesync isn't *an* antipattern, it's *the* antipattern.

Contact [davesync-sales@mail.ru](mailto:git@github.com:danalstadt/davesync.git) for a license.

## Usage

```js
global.WIN32 = true;
global.DAVESYNC_LICENSE_KEY = 'YOUR_LICENSE_KEY';

const davesync = require('./davesync');

//Do davesynchronous things here.
```

## Exports

### exports.Promise

Exports an Promises/A+ implementation from one of [Bluebird](http://bluebirdjs.com/docs/getting-started.html), [Q](https://github.com/kriskowal/q), or [RSVP](https://github.com/tildeio/rsvp.js/). Chosen at random to keep you on your toes.

### exports.async

[This](https://github.com/caolan/async)

### exports.unpromisify

What you should be using. Accepts a Promise from a non-davesynchronous library and lets you use callbacks like in the good ole days.

```js
davesync.unpromisify(SomeStupidThing.somethingThatRetunsAPromise(), function (err, res) {
    //FOO
});
```

## Run tests

`npm test --davesync_license=YOUR_LICENSE_KEY`



