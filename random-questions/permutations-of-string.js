/**
 *
 * @param {string} str
 */
function permutations(str) {
  permutationsOfString(str, "");
}

/**
 *
 * @param {string} str
 * @param {string} prefix
 */
function permutationsOfString(str, prefix) {
  // base
  if (str.length === 0) {
    console.log(prefix);
  } else {
    for (let i = 0; i < str.length; i++) {
      let rem = str.substring(0, i) + str.substring(i + 1);
      permutationsOfString(rem, prefix + str.charAt(i));
    }
  }
}

permutations('ABC');