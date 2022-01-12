#!/usr/bin/env node
import meow from 'meow';
import isUrl from 'is-url-superb';
import filenamify from 'filenamify';
import filenamifyUrl from 'filenamify-url';

const cli = meow(`
	Usage
	  $ filenamify <text>

	Options
	  --replacement  Replacement for reserved filename characters [Default: !]

	Example
	  $ filenamify 'foo/bar' --replacement=🦄
	  foo🦄bar
	  $ filenamify 'https://sindresorhus.com/foo?bar=baz'
	  sindresorhus.com!foo!bar=baz

`, {
	importMeta: import.meta,
	flags: {
		replacement: {
			type: 'string',
		},
	},
});

const [text] = cli.input;
const method = isUrl(text) ? filenamifyUrl : filenamify;

console.log(method(text, cli.flags));
