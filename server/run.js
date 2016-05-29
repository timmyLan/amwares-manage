/**
 * Created by llan on 2016/5/29.
 */
'use strict';

/**
 * Dependencies
 */

const co = require('co');


/**
 * Run a generator function and print errors if any
 */

function run (fn) {
    co(fn).catch(function (err) {
        console.error(err.stack);
    });
}


/**
 * Expose fn
 */

module.exports = run;