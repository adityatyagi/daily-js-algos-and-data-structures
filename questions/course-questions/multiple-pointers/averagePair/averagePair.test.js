const averagePair = require("./averagePair");

test("averagePair is a function", () => {
  expect(typeof averagePair).toEqual("function");
});

test("returns true", () => {
  expect(averagePair([1, 2, 3], 2.5)).toEqual(true);
});

test("returns true", () => {
  expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toEqual(true);
});

test("returns false", () => {
  expect(averagePair([], 4)).toEqual(false);
});
