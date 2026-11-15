// euclid(6006, 3738735, 51051) --> 3003
// euclid(7) --> 7
// euclid(-421, 0.9923501, 3.1401525235324, -228.148832269) --> -1

/**
 * counts greatest common divisor for n numbers
 * by calling 'euclidForTwo' in cycle for all input params
 * @param {array} ...args contains numbers to check
 * @returns {number} solution or '-1' in case of invalid data
 */
const euclid = (...args: number[]): number => {
  if (args.some(el => !((el >= 0) && (typeof el === 'number') && (Number.isInteger(el))))) {
    return -1;
  }

  if (args.length == 1) {
    return args[0];
  }

  let gcd = (a: any, b: any): any => {
    if (!b) {
      return a;
    }
  
    return gcd(b, a % b);
  }

  let result = args[0];
  for (let i = 1; i < args.length; i++) {
    result = gcd(result, args[i]);
  }
  
  return result;
}
export default euclid