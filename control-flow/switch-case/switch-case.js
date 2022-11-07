// Switch...case   --- kind of outdated, more likely to use If...else

//  With Switch and Case, we can compare the value of a variable against other values

let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;
  case "moderator":
    console.log("Moderator User");
    break;
  default:
    console.log("Unknown Role");
}

// We can also execute this logic using If...else statements:

if (role === "guest") {
  console.log("Guest User");
} else if (role === "moderator") {
  console.log("Moderator User");
} else console.log("Unknown Role");
