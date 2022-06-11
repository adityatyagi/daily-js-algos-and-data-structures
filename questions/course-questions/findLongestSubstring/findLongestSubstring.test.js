const findLongestSubstring = require("./findLongestSubstring");

test("findLongestSubstring is a function", () => {
  expect(typeof findLongestSubstring).toEqual("function");
});
test("should return 0", () => {
  expect(findLongestSubstring("")).toEqual(0);
});
test("should return 7", () => {
  expect(findLongestSubstring("rithmschool")).toEqual(7);
});
test("should return 6", () => {
  expect(findLongestSubstring("thisisawesome")).toEqual(6);
});
test("should return 7", () => {
  expect(findLongestSubstring("thecatinthehat")).toEqual(7);
});
test("should return 1", () => {
  expect(findLongestSubstring("bbbbbb")).toEqual(1);
});
test("should return 8", () => {
  expect(findLongestSubstring("longestsubstring")).toEqual(8);
});
test("should return 6", () => {
  expect(findLongestSubstring("thisishowwedoit")).toEqual(6);
});
