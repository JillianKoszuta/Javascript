// creating variable display, it is a function, takes in myName and myAge as parameters
const display = (myName, myAge) => {
  //earlyYears is equal to 2, this will change
  let earlyYears = 2; //earlyYears is equal to 2, this can change
  earlyYears *= 10.5; //earlyYears is multiplied by 10.5
  let laterYears = myAge - 2; //laterYears is equal to age passed in - 2
  laterYears *= 4; //laterYears is multiplied by 4
  const myAgeInDogYears = earlyYears + laterYears; //myAgeInDogYears is equal to earlyYears + laterYears
  const nameToDisplay = myName.toLowerCase(); //creates variable nameToDisplay, it is equal to name passed in converted to lower case
  //display message using variables
  console.log(
    `My name is ${nameToDisplay}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
  );
};

//calling display function with jillian as myName and 22 as myAge
display("Jillian", 22);
display("Alex", 23);
