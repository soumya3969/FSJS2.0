// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

// Function to perform addition
function add(a, b) {
  return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
  return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
  return a * b;
}

// Function to perform division
function divide(a, b) {
  if (b === 0) {
    return 'Error: Divide by zero';
  }
  return a / b;
}

let a = 10;
let b = 5;

console.log(add(a, b)); // Output: 15
console.log(subtract(a, b)); // Output: 5
console.log(multiply(a, b)); // Output: 50
console.log(divide(a, b)); // Output: 2

