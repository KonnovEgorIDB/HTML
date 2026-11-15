type Indexed<T = unknown> = {
    [key in string]: T;
};

function merge(lhs: Indexed, rhs: Indexed): Indexed {
		// Код здесь
}

export default merge;

merge({a: {b: {a: 2}}, d: 5}, {a: {b: {c: 1}}});
/*
{
	a: {
		b: {
			a: 2,
			c: 1,
		}
	},
	d: 5,
}
*/