// Do...while Loop

// Difference between a while loop and a do-while loop:
// -- Do-while loops always execute once, even if the condition evaluates to false.

let i = 0;

do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);
