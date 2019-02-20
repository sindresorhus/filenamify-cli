#!/usr/bin/env node
'use strict';
const meow = require('meow');
const filenamify = require('filenamify');

const cli = meow(`
	Usage
	  $ filenamify <text>

	Options
	  --replacement  Replacement for reserved filename characters [Default: !]

	Example
	  $ filenamify 'foo/bar' --replacement=🦄
	  foo🦄bar

`, {
	flags: {
		replacement: {
			type: 'string'
		}
	}
});

console.log(filenamify(cli.input[0], cli.flags));
