'use strict';

const mergesort = require('../src/merge_sort_2');

let lr = [62, 64, 67, 68, 33, 36, 7, 23, 38, 76, 100, 46, 64, 30, 47, 79, 34, 31, 38, 81, 39, 84, 6, 40, 16, 50, 41, 40, 39, 83, 6, 50, 75, 73, 34, 32, 39, 91, 17, 69, 80, 53, 47, 45, 36, 97, 39, 31, 32, 92, 17, 31, 87, 23, 89, 2, 90, 43, 71, 67, 71, 7, 56, 32, 42, 47, 93, 90, 61, 26, 58, 7, 54, 89, 33, 49, 72, 62, 33, 61, 95, 65, 24, 79, 51, 93, 13, 36, 24, 41, 38, 63, 55, 67, 92, 7, 6, 86, 27, 87];
let lrSorted = [2, 6, 6, 6, 7, 7, 7, 7, 13, 16, 17, 17, 23, 23, 24, 24, 26, 27, 30, 31, 31, 31, 32, 32, 32, 33, 33, 33, 34, 34, 36, 36, 36, 38, 38, 38, 39, 39, 39, 39, 40, 40, 41, 41, 42, 43, 45, 46, 47, 47, 47, 49, 50, 50, 51, 53, 54, 55, 56, 58, 61, 61, 62, 62, 63, 64, 64, 65, 67, 67, 67, 68, 69, 71, 71, 72, 73, 75, 76, 79, 79, 80, 81, 83, 84, 86, 87, 87, 89, 89, 90, 90, 91, 92, 92, 93, 93, 95, 97, 100];

test('Takes an array and sorts it in place', function () {
  expect(mergesort([88, 74, 78, 45, 23, 1, 10, 8, 100])).toMatchObject([1, 8, 10, 23, 45, 74, 78, 88, 100]);
  expect(mergesort(lr)).toMatchObject(lrSorted);
});
