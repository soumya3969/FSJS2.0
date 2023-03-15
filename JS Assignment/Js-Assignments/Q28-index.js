// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//  	   *****

// Triangle pattern
let n = 3; //use prompt for user input
for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i));
}

// Square pattern
n = 3;//use prompt for user input
for (let i = 1; i <= n; i++) {
  console.log("*".repeat(n));
}

// Pyramid pattern
n = 3; //use prompt for user input
for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1) + " ".repeat(n - i));
}
