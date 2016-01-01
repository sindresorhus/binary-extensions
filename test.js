import test from 'ava';
import m from './';

test(t => {
	t.true(Array.isArray(m));
	t.true(m.length > 0);
});
