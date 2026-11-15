/**
const expected =
			'   *   \n' +
			'  ***  \n' +
			' ***** \n' +
			'*******\n' +
			'   |   \n';
assert.strictEqual(tree(5), expected);
assert.strictEqual(tree('5'), expected);
*/

type Nullable<T> = T | null;

const TYPE_ERROR = 'Something wrong with type of input param';

const tree = (lvl: number | string): Nullable<string> => {
    if (typeof lvl !== 'string' && typeof lvl !== 'number') {
    throw new TypeError(TYPE_ERROR);
  }

  if (lvl < 3) {
    return null;
  }

  let symb = 1;
  const levelInt = +lvl;
  const maxLength = 2 * (levelInt - 2) + 1;

  const treeArray = new Array(levelInt).fill(' '.repeat(maxLength));

  const result = treeArray.reduce((acc, item, ind) => {
        if (ind === (levelInt - 1)) {
            item = item.slice(0, (maxLength - 1) / 2) + '|' + item.slice(0, (maxLength - 1) / 2);
        } else {
            item = item.slice(0, (maxLength - symb) / 2) + '*'.repeat(symb) + item.slice(0, (maxLength - symb) / 2);
        }
        symb += 2;
        return acc + item.toString() + '\n';
    }, '');

  return result;
};

export default tree