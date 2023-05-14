/*
Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".
*/

/*
function reverseString(str) {
  return str;
}

reverseString("hello");
*/

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

function reverseString_(str) {
  let arrayOfString = str.split("");
  //   console.log(arrayOfString);
  let reverseOfArray = arrayOfString.reverse();
  //   console.log(reverseOfArray);
  let reverseOfString = reverseOfArray.join("");
  console.log(reverseOfString);
  str = reverseOfString;
  return str;
}

reverseString("hello");
