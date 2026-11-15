function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
	// Код
}

export default set

/**
  * set({ foo: 5 }, 'bar.baz', 10); // { foo: 5, bar: { baz: 10 } }
  * set(3, 'foo.bar', 'baz'); // 3
*/