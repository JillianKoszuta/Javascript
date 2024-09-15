const fruits = ["mango", "papaya", "pineapple", "apple"];
//above is an array with 4 elements.
//first element is index 0, value is 'mango'
//last element is index 3, value is 'apple'

// Iterate over fruits below
// a function that takes in a fruit as a parameter. logs out message
function display(fruit) {
  // below should log out something like "I want to eat a mango"
  console.log(`I want to eat a ${fruit}`);
}

// for each gives 3 params you can use. They are:
// element - value of the array at the current index
// index - current position in array
// array - the original array.
// you can assign these to any variable name by changing e, i or a below
// element = e, index = i, array = a;
// ALWAYS ELEMENT, INDEX, ARRAY!!!!!!
// below calls the display function for each element in the array. it passes the current element (e) as the parameter for fruit
fruits.forEach((e, i, a) => {
  display(e)
});
