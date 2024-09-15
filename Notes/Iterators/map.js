const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
// secret message should be ['H', 'e', 'l', ...]

//map takes same as for loop
// we call element animal
// Secret message is animals with the change in () for .map
// every element in animals we return the first character (letter)
const secretMessage = animals.map(animal => {
  return animal.charAt(0)
})

// join takes ['a', 'b', 'c'] and turns into 'abc'
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => {
  return num / 100;
}) 
console.log(smallNumbers);