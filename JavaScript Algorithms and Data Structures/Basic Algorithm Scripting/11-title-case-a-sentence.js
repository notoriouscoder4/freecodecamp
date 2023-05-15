/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

/*
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");
*/

function titleCase(str) {
  let capArr = [];
  let newStr = "";
  let lowercaseArr = str.toLowerCase().split(" ");

  for (let i = 0; i < lowercaseArr.length; i++) {
    capArr[i] =
      lowercaseArr[i].charAt(0).toUpperCase() +
      lowercaseArr[i].slice(1).toLowerCase();
  }
  return (newStr = capArr.join(" "));
}

titleCase("I'm a little tea pot");
