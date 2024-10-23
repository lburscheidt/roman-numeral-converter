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

const numberInput = document.querySelector("#number");
const output = document.querySelector("#output");
const convertBtn = document.querySelector("#convert-btn");

convertBtn.addEventListener("click", () => {
  let userNumber = Number(numberInput.value);
  output.textContent = convertToRoman(userNumber);
});

function getKeyByValue(object, value) {
  const values = Object.values(object);
  const index = values.indexOf(value);
  if (index !== -1) {
    const keys = Object.keys(object);
    return keys[index];
  }
  return null;
}

function convertToRoman(number) {
  if (number === "") {
    return "Please enter a valid number";
  }
  if (number < 1) {
    return "Please enter a number greater than or equal to 1";
  } else if (number >= 4000) {
    return "Please enter a number less than or equal to 3999";
  } else {
    let numArray = number.toString().split("");
    let ones = Number(numArray[numArray.length - 1]);
    let tensDigit = Number(numArray[numArray.length - 2]);
    let tens = Number(numArray[numArray.length - 2] * 10);
    let hundredsDigit = Number(numArray[numArray.length - 3]);
    let hundreds = Number(numArray[numArray.length - 3] * 100);
    let thousandsDigit = Number(numArray[numArray.length - 4]);
    let thousands = Number(numArray[numArray.length - 4] * 1000);

    let romanOnes = getKeyByValue(roman, ones);
    let romanTens = getKeyByValue(roman, tens);
    let romanHundreds = getKeyByValue(roman, hundreds);
    let romanThousands = getKeyByValue(roman, thousands);
    let romanNumeral = [];
    if (romanOnes !== null) {
      romanNumeral.unshift(romanOnes);
    } else {
      romanOnes = "";
      if (ones < 4) {
        for (let i = 1; i <= ones; i++) {
          romanOnes += "I";
        }
      } else if (romanOnes > 5 && romanOnes < 9) {
        romanOnes = "V";
        for (let i = 5; i <= romanOnes; i++) {
          romanOnes += "I";
        }
      }
      romanNumeral.unshift(romanOnes);
    }
    if (romanTens != null) {
      romanNumeral.unshift(romanTens);
    } else {
      romanTens = "";
      if (tensDigit < 4) {
        for (let i = 1; i <= tensDigit; i++) {
          romanTens += "X";
        }
      } else if (tensDigit > 5 && tensDigit < 9) {
        romanTens = "L";
        for (let i = 5; i <= tensDigit; i++) {
          romanTens += "X";
        }
      }
      romanNumeral.unshift(romanTens);
    }
    if (romanHundreds != null) {
      romanNumeral.unshift(romanHundreds);
    } else {
      romanHundreds = "";
      if (hundredsDigit < 4) {
        for (let i = 1; i <= hundredsDigit; i++) {
          romanHundreds += "C";
        }
      } else if (hundredsDigit > 5 && hundredsDigit < 9) {
        romanHundreds = "D";
        for (let i = 5; i <= hundredsDigit; i++) {
          romanHundreds += "C";
        }
      }
      romanNumeral.unshift(romanHundreds);
    }
    if (romanThousands != null) {
      romanNumeral.unshift(romanThousands);
    } else {
      romanThousands = "";
      if (thousandsDigit < 4) {
        for (let i = 1; i <= thousandsDigit; i++) {
          romanThousands += "M";
        }
      }
      romanNumeral.unshift(romanThousands);
    }

    return romanNumeral.toString().replaceAll(",", "");
  }
}
