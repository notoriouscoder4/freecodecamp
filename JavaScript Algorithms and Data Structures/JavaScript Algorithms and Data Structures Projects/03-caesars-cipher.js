/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

/*
function rot13(str) {
  return str;
}

rot13("SERR PBQR PNZC");
*/

let lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
};

function rot13(encodedStr) {
  let codeArr = encodedStr.split(""); // string to array
  let decodedArr = []; // it will store ans

  decodedArr = codeArr.map((letter) => {
    if (lookup.hasOwnProperty(letter)) {
      letter = lookup[letter];
    }
    return letter;
  });

  return decodedArr.join("");
}

rot13("SERR PBQR PNZC");
