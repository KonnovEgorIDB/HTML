/**
	take([1, 2, 3]); // => [1] 
	take([1, 2, 3], 2); // => [1, 2] 
	take([1, 2, 3], 5); // => [1, 2, 3] 
	take([1, 2, 3], 0); // => []

	const testErrCase1 = [123, [1, 2, 3], [1, 2, 3], [1, 2, 3]]
	const testErrCase2 = [1, [1], '1', true]

	for (let i = 0; i<4; i++) {
	  try {
	    take(testErrCase1[i], testErrCase2[i])
	  }
	  catch(err) {
	    console.log(err.toString()) // ValidationError: bad value
	  }
	 }
*/

class ValidationError extends Error {
  // ...
}

function take<T>(list: T[], num: number = 1): T[] {
	// Код здесь
}

export default take