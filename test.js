'use strict';
var test = require('ava');
var binaryExtensions = require('./');

test(function (t) {
	t.assert(Array.isArray(binaryExtensions));
	t.assert(binaryExtensions.length > 0);
	t.end();
});
