// <!-- If...Else -->

// <!--
//   Get current hour.
//   Depending on its value, greet the user with a different message.

//   If hour is between 6am-12-pm: Good Morning!
//   If it is between 12pm and 6pm: Good Afternoon!
//   Otherwise: Good evening!
// -->

// <!-- if (condition) {
//   statement
// }
// else if (anotherCondition) {
//   statement;
// }
// else if (yetAnotherCondition) {
//   statement;
// } else
// statement; -->

function greet(hour) {
  if (hour >= 6 && hour < 12) {
    console.log("Goog morning!");
  } else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon!");
  } else console.log("Good evening!");
  return greet;
}
console.log(greet(24));
