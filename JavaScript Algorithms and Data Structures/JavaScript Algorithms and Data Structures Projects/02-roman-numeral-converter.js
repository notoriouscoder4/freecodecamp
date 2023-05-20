/*
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
      M	             1000
      CM	           900
      D	             500
      CD	           400
      C	             100
      XC	           90
      L	             50
      XL	           40
      X	             10
      IX	           9
      V	             5
      IV	           4
      I	             1

All roman numerals answers should be provided in upper-case.
*/

/*
function convertToRoman(num) {
 return num;
}

convertToRoman(36);
*/

function convertToRoman(num) {
  const roman = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

  const code = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];

  let res = "";
  for (let i = 12; i >= 0; i--) {
    while (num >= roman[i]) {
      res += code[i];
      num -= roman[i];
    }
  }
  return res;
}

convertToRoman(36);
