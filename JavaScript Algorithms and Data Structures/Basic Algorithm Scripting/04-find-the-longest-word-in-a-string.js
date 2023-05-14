/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

/*
function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
*/

function findLongestWordLength(str) {
  // convert string to array and find length of each array item
  let arr = str.split(" ").map((word) => word.length);
  console.log(arr);
  //iterate over array to find longest word
  let max = Math.max(...arr);
  console.log(max);
  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
