//  ****** Operators ******  //

// Use Operators with Variables to create Expressions and implement Logic and Algorithms

//  An expression is something that produces a value (ex. x + y)

//  ******** Types of Operators ******** //
// Arithmetic;
// Assignment;
// Comparison;
// Logical;
// Bitwise

///////////////////////////////////////////////////////////////////////////////////////////
//  ******************************* Arithmetic Operators ******************************* //
///////////////////////////////////////////////////////////////////////////////////////////
let x = 10;
let y = 3;

// Addition Operator
console.log(x + y);

// Subtraction Operator
console.log(x - y);

// Multiplication Operator
console.log(x * y);

// Division Operator
console.log(x / y);

// Modulus Operator
console.log(x % y);

// Exponentiation Operator (ex: x to the power of y)
console.log(x ** y);

// Increment Operator (++)
console.log(++x);
console.log(x++);

// Decrement Operator (--)
console.log(--x);
console.log(x--);

///////////////////////////////////////////////////////////////////////////////////////////
//  ******************************* Assignment Operators ******************************* //
///////////////////////////////////////////////////////////////////////////////////////////
let a = 10;

// Below is the same as x = x + 1 (It only works with 1)
// Addition Assignment Operator
x++;

// Below is the same as x = x + 5
// Addition Assignment Operator
x += 5;

// Below is the same as x = x * 3;
// Multiplication Assignment Operator
x *= 3;

// Also
x -= 3;
x /= 3;
x %= 3;

///////////////////////////////////////////////////////////////////////////////////////////
//  ******************************* Comparison Operators ******************************* //
///////////////////////////////////////////////////////////////////////////////////////////

// The result of an expression that includes a comparison operator is a boolean (true/false)
let b = 1;

// ***Relational Operators *** //
console.log(b > 0);
console.log(b >= 1);
console.log(b < 0);
console.log(b <= 1);

// ***Equality Operators *** //

//  Strict Equality Operator (both values on the sides of the operator have the same TYPE and the same Value)
console.log(1 === 1);

// Loose Equality Operator
console.log("1" == 1);
console.log(true == 1);
console.log(false == 0);

//  Not Equal Operator
console.log(b !== 1);

///////////////////////////////////////////////////////////////////////////////////////////
//  *************************** Ternary/Conditional Operators ************************** //
///////////////////////////////////////////////////////////////////////////////////////////

// If a customer has more than 100 points, they are a 'gold' customer, otherwise, they are a 'silver' customer.

let points = 110;

let type = points > 100 ? "gold" : "silver";
// If points > 100 evaluates to true, that means this is a gold customer, so we set type to 'gold'.
// Otherwise, if the expression evaluates to false, we want to set type to 'silver'.

console.log(type);

///////////////////////////////////////////////////////////////////////////////////////////
//  ********************************* Logical Operators ******************************** //
///////////////////////////////////////////////////////////////////////////////////////////

// Use logical operators to make decisions based on multiple conditions

// ** 3 Types of Logical Operators ** //
//  Logical And
// Logical Or
// Not

// ******** Logical And (&&) ******** //
// Returns TRUE if both operands are TRUE

console.log(true && true);
//Evaluates to TRUE

console.log(true && false);
//Evaluates to false

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

// ******** Logical OR (||) ******** //
//Returns TRUE one or both operands is TRUE

highIncome = true;
goodCreditScore = false;
eligibleForLoan = highIncome || goodCreditScore;
console.log("Eligible", eligibleForLoan);

// ******** NOT (!) ******** //
//Returns TRUE one or both operands is TRUE

let applicationRefused = !eligibleForLoan;
console.log("Application Refused: ", applicationRefused);

///////////////////////////////////////////////////////////////////////////////////////////
//  ************************* Logical Operators with Non-booleans*********************** //
///////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////// Powerful when working with default values vs. chosen values ///////////////////////////////////

// ***** Falsy ***** //
// undefined
// null
// 0
// false
// ''
// NaN

// ***** Truthy ***** //
// Anthing that is not Falsy

// false || true       returns true
// false || 'Mosh'     returns 'Mosh'
// false || 1          returns 1
// false || 1 || 2     returns 1 (Short-Circuiting: once it gets to a true/truthy, it returns it and stops looking for any more trues)

let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);
// returns value for userColor (red) because the user has selected a color

let userColor2 = undefined;
let defaultColor2 = "blue";
let currentColor2 = userColor2 || defaultColor2;
console.log(currentColor2);
// returns value for defaultColor (blue) because the user has not selected a color

//////////////////////////////////////////////////////////////////////////////////////////////
//  ********************************* Operator Precedence ******************************** //
////////////////////////////////////////////////////////////////////////////////////////////

// ///////////// PEMDAS ////////////

let c = 2 + 3 * 4;

console.log(c);

// To make it easier to read, add parenthesis to an expression

// ****************************************************************************************************************************** //
// ******************************************* Exercise: Swapping Variables ***************************************************** //
// ****************************************************************************************************************************** //

let d = "red";
let e = "blue";
let f = d;
d = e;
e = f;

console.log(d);
console.log(e);
