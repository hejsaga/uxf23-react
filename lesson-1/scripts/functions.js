// Function declaration syntax
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("UXF23")); // Hello, UXF23!

// Function expression syntax
/* const add = function (x, y) {
  return x + y;
};
console.log(add(5, 3)); // 8 */

/* // Arrow function syntax (ES6+)
const subtract = (x, y) => x - y;
console.log(subtract(10, 7)); // 3
 */
/* // Function with default parameter
const multiply = (x, y = 2) => {
  return x * y;
}
console.log(multiply(4)); // 8 */

/* // Function with callback parameter
const performOperation = (x, y, operation) => {
  return operation(x, y);
}
console.log(performOperation(10, 5, subtract)); // 5 */

/* // Function with closure
const outerFunction = () => {
  const message = "Hello from outer function!";

  const innerFunction = () => {
    return message;
  }

  return innerFunction;
}

// Using closure
const innerFunc = outerFunction();
console.log(innerFunc()); // Hello from outer function! */
