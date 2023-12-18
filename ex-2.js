//Exercise 2: Fizz Buzz

const fizzBuzz = function (n) {
  //Start coding here
  const result = [];

  for (let i = 1; i <= n; i++) {
    let value = "";

    if (i % 3 === 0) {
      value += "Fizz";
    }

    if (i % 5 === 0) {
      value += "Buzz";
    }

    result.push(value || i.toString());
  }

  return result;
};

const result1 = fizzBuzz(3);
const result2 = fizzBuzz(5);
const result3 = fizzBuzz(15);

console.log(result1); // ["1","2","Fizz"]
console.log(result2); // ["1","2","Fizz","4","Buzz"]
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
