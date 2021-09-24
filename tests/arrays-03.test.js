const { addUpArrayElements } = require('../src/arrays-03');

test('addUpArrayElements', () => {
  expect(addUpArrayElements([1, 2, 3, 4, 5])).toBe(15);
  expect(addUpArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
  expect(addUpArrayElements([])).toBe();
});
