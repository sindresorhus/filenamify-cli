import test from 'ava';
import {execa} from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['foo/bar']);
	t.is(stdout, 'foo!bar');
});

test('url support', async t => {
	const {stdout} = await execa('./cli.js', ['https://sindresorhus.com/foo?bar=baz']);
	t.is(stdout, 'sindresorhus.com!foo!bar=baz');
});
