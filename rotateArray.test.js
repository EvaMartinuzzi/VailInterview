const { rotateArrayLeft } = require('./rotateArray');

test('Rotate array left 2 positions when length is greater than 2', () => {
  expect(rotateArrayLeft([1,2,3,4,5,6,7], 2)).toEqual([3,4,5,6,7,1,2]);
});

test('Rotate array left by a negative amount throws an error', () => {
  expect(rotateArrayLeft([1,2,3,4,5,6,7], -2)).toEqual("Rotation must be a non-negative integer");
});

test('Rotate array left 6 positions when length is less than 6', () => {
  expect(rotateArrayLeft([1,2,3,4], 6)).toEqual([3,4,1,2]);
});

test('Rotate array with one entry', () => {
  expect(rotateArrayLeft([42], 2)).toEqual([42]);
});

test('Rotate empty array', () => {
  expect(rotateArrayLeft([], 6)).toEqual([ NaN ]);
});

test('Rotate array left 6 positions when length is less than 6', () => {
  expect(rotateArrayLeft([1,2,3,4], 0)).toEqual([1,2,3,4]);
});