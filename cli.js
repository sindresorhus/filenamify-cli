#!/usr/bin/env node
import meow from 'meow';
import filenamify from 'filenamify';

const cli = meow(`
	Usage
	  $ filenamify <text>

	Options
	  --replacement  Replacement for reserved filename characters [Default: !]

	Example
	  $ filenamify 'foo/bar' --replacement=🦄
	  foo🦄bar

`, {
	importMeta: import.meta,
	flags: {
		replacement: {
			type: 'string',
		},
	},
});

console.log(filenamify(cli.input[0], cli.flags));
