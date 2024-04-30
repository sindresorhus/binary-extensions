import test from 'ava';
import binaryExtensions from './index.js';

test('main', t => {
	t.true(Array.isArray(binaryExtensions));
	t.true(binaryExtensions.length > 0);
});
