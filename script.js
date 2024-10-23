console.log("hello");
const roman = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function convertToRoman(number) {
  let numArray = number.toString().split("");
  console.log(numArray);
  let ones = numArray[numArray.length - 1];
  let tens = numArray[numArray.length - 2];
  let hundreds = numArray[numArray.length - 3];
  let thousands = numArray[numArray.length - 4];
}

convertToRoman(1234);
