function sayHello() {
  console.log("Hello");
}
const sayHi = function () {
  console.log("Hi");
};
const greetings = [sayHello, sayHi];
for (const greetings of greetings) {
  greeting();
}