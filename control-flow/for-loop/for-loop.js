// For Loop

// for (initialExpression; condition; incrementExpression) {
//   statement
// }

// Example: Display "Hello World" 5 times:

for (let i = 0; i < 5; i++) {
  console.log("Hello World", i);
}

// Console Output:
// Hello World 0
// Hello World 1
// Hello World 2
// Hello World 3
// Hello World 4

// Example: Display Odd Numbers 1-5:

for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Example: Display Odd Numbers 1-5 in Reverse Order

for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
