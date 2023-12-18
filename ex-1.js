//Exercise 1: Roman to Integer

const romanToInt = function (s) {
  //Start coding here
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currentSymbol = s[i];
    const currentValue = romanNumerals[currentSymbol];
    const nextValue = romanNumerals[s[i + 1]];

    if (nextValue > currentValue) {
      result += nextValue - currentValue;
      i++;
    } else {
      result += currentValue;
    }
  }

  return result;
};

const result1 = romanToInt("III");
const result2 = romanToInt("LVIII");
const result3 = romanToInt("MCMXCIV");

console.log(result1);
console.log(result2);
console.log(result3);
