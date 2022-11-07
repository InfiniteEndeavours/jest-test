function addition(num1, num2) {
  if (Number.isInteger(num1) || Number.isInteger(num1)) {
    return num1 + num2;
  } else if (Number(num1 || num2) === num1 || num2 && num1 || num2 % 1 !== 0) {
    return num1 + num2;
  }
}

// Exports the function to allow jest to test - needed for the require statement in the calc.test.js file.
module.exports = addition;
