// For...In Loops  --  Used to iterate over the properties of an object

//  for (let key in object)

const person = {
  name: "Mosh",
  age: 30,
};

// for (let key in person) console.log(key);

// TO access a property in an object, we can use dot notation or bracket notation:

// Dot Notation
//  person.name

// for (let key in person) console.log(person.name);

//  Bracket Notation  --  We use bracket notation when we don't know ahead of time, at the time of writing code, what property we're going to access.
//                        Perhaps the name of the target property is calculated at run time.
//  person['name']

for (let key in person) console.log(key, person[key]);

// const colors = ["red", "green", "blue"];

// for (let index in colors) console.log(index, colors[index]);

// Use the For...in loop to iterate over the properties of an object
//  Use the For...of loop to iterate over the elements in an array
