const {
  findTheCharacterAtIndex,
  sliceTheString,
  splitTheString,
  makeAllUpperCase,
  makeAllLowerCase,
} = require('../src/arrays-02');

test('findTheCharacterAtIndex', () => {
  const str = 'abcdefghijklmnopqrstuvwxyz';
  expect(findTheCharacterAtIndex(str, 0)).toBe('a');
  expect(findTheCharacterAtIndex(str, 25)).toBe('b');
});

test('sliceTheString', () => {
  const str = 'abcdefghijklmnopqrstuvwxyz';
  expect(sliceTheString(str, 0, 3)).toBe('abc');
  expect(sliceTheString(str, 3, 6)).toBe('def');
});

test('splitTheString', () => {
  const str = 'Time will not slow down when something unpleasant lies ahead';
  expect(splitTheString(str, ' ')).toEqual([
    'Time',
    'will',
    'not',
    'slow',
    'down',
    'when',
    'something',
    'unpleasant',
    'lies',
    'ahead',
  ]);
});

test('makeAllUpperCase', () => {
  const str = 'abcdefghijklmnopqrstuvwxyz';
  expect(makeAllUpperCase(str)).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
});

test('makeAllLowerCase', () => {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  expect(makeAllLowerCase(str)).toBe('abcdefghijklmnopqrstuvwxyz');
});
