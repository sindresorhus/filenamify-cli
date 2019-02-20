import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['foo/bar']);
	t.is(stdout, 'foo!bar');
});
