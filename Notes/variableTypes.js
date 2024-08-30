// when decalaring a variable we use var, let or const then the variable name.
var variable1; // DONT USE var! outdated. use let or const

console.log("dog");
console.log(4);
console.log("dog", 4, "cat", 74215);

let animal = "fox";
console.log(animal);

animal = "penguin";
console.log(animal);

// variable types
const strings = "words, or any text";
const numbers = 156;
const decimals = 0.81634124; // decimals are considered numbers

const objects = {
  property: "value",
};

// arrays are considered objects
const arrays = [1, "word", {}, []]; // arrays can be lists of anything. Even other lists

const booleans = true; // a boolean is a value equal to true or false

// differences between const and let
// const cannot be reassigned

const animal2 = "elaphants";

const message = `I love ${animal2}, ${animal2} is great. ${animal2} is the best`;

const addTwoToNumSent = function (arg) {
  return arg - 2;
};

const startingNum = 0;
const endingNum = addTwoToNumSent(startingNum);

console.log(endingNum);
