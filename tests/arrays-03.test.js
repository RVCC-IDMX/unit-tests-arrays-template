const {
  addUpArrayElements,
  makeSquareNumbers,
  filterForLargeWords,
  findTheFirstEvenNumber,
  sortCaseSensitive,
  makeTheString,
  reverseTheArray,
  makeMirrorArray,
} = require('../src/arrays-03');

test('addUpArrayElements', () => {
  expect(addUpArrayElements([1, 2, 3, 4, 5])).toBe(15);
  expect(addUpArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
  expect(addUpArrayElements([])).toBe();
});

test('makeSquareNumbers', () => {
  const sampleArray = [1, 2, 3, 4, 5];
  const expectedArray = [1, 4, 9, 16, 25];
  expect(makeSquareNumbers(sampleArray)).toEqual(expectedArray);
  expect(makeSquareNumbers(sampleArray)).not.toBe(sampleArray);
});

test('filterForLargeWords', () => {
  const sampleArray = ['a', 'big', 'black', 'bear', 'is', 'running'];
  const expectedArray = ['black', 'bear', 'running'];
  expect(filterForLargeWords(sampleArray, 3)).toEqual(expectedArray);
  expect(filterForLargeWords(sampleArray, 3)).not.toBe(sampleArray);
});

test('findTheFirstEvenNumber', () => {
  let sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(findTheFirstEvenNumber(sampleArray)).toBe(2);
  sampleArray = [1, 5, 9, 55, 100, 110, 140, 150, 200, 300];
  expect(findTheFirstEvenNumber(sampleArray)).toBe(100);
});

test('sortCaseSensitive', () => {
  const sampleArray = ['A', 'big', 'black', 'bear', 'is', 'running'];
  const expectedArray = ['bear', 'big', 'black', 'is', 'running', 'A'];
  expect(sortCaseSensitive(sampleArray)).toEqual(expectedArray);
  expect(sortCaseSensitive(sampleArray)).not.toBe(sampleArray);
});

test('makeTheString', () => {
  const sampleArray = ['A', 'big', 'black', 'bear', 'is', 'running'];
  const expectedString = 'A big black bear is running';
  expect(makeTheString(sampleArray, ' ')).toBe(expectedString);
  expect(makeTheString(sampleArray, ' ')).not.toBe(sampleArray);
});

test('reverseTheArray', () => {
  const sampleArray = ['A', 'big', 'black', 'bear', 'is', 'running'];
  const expectedArray = ['running', 'is', 'bear', 'black', 'big', 'A'];
  expect(reverseTheArray(sampleArray)).toEqual(expectedArray);
  expect(reverseTheArray(sampleArray)).not.toBe(sampleArray);
});

test('makeMirrorArray', () => {
  let sampleArray = [1, 2];
  let expectedArray = [1, 2, 1];
  expect(makeMirrorArray(sampleArray)).toEqual(expectedArray);
  expect(makeMirrorArray(sampleArray)).not.toBe(sampleArray);
  sampleArray = [1, 4, 8, 10, -21];
  expectedArray = [1, 4, 8, 10, -21, 10, 8, 4, 1];
  expect(makeMirrorArray(sampleArray)).toEqual(expectedArray);
  expect(makeMirrorArray(sampleArray)).not.toBe(sampleArray);
});
