/**
 * @description error codes
 * @type {string}
 */
const TYPE_ERROR = 'Unsupported input value type';
const RANGE_ERROR = 'Input value must be [1; 3999]';
const UNKNOWN_SYMBOLS = 'Unknown input symbols';

/**
 * @description validate input values and determinate needed convert solution
 * @param {string|number} number
 * @returns {string|number}
 */
const roman = (number: number | string): number | string => {
	// Код
};

export default roman

console.log(roman(1904)) // MCMIV
console.log(roman('MCMXC')) // 1990
console.log(roman('2017')) // MMXVII
console.log(isNaN(roman('xxxxx'))) // true
console.log(isNaN(roman('iiii'))) // true

try {
	roman('19a04')
} catch (err) {
	console.log (err) // Error { "Unknown input symbols" }
}

try {
	roman(true)
} catch (err) {
	console.log (err) // Error { "Unsupported input value type" }
}

try {
	roman(0)
} catch (err) {
	console.log (err) // Error { "Input value must be [1; 3999]" }
}