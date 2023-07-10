/**
 * Write a function called "isSubsequence" which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 */

const isSubsequence = (str1, str2) => {
  // edge case
  if (!str2) return false;

  // using MP
  let i = 0;
  let j = 0;

  if (!str1) return true; // because empty string is present in str2

  // i++ and j++ will happen in every iteration of while loop to ensure the order remains intact
  while (j < str2.length) {
    // compare
    if (str2[j] === str1[i]) {
      i++;
    }

    // check if i has reached the end of str1
    if (i === str1.length) {
      return true;
    }

    // increment j
    j++;
  }

  return false;
};

// console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("abc", "acb"));
// console.log(isSubsequence("hello", "hello world"));
