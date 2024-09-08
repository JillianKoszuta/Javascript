// below is an es6 arrow function.
// age is a variable passed in;
const showMessage = (age) => {
  let msg; //creating variable msg, it does not have a value yet
  //if user is 18 or above
  if (age >= 18) {
    //user is at least 18
    //giving msg a value of...
    msg = "You are old enough to enter.";
  } else {
    //user is below 18
    //giving msg a value of...
    msg = "You are not old enough to enter.";
  }
  console.log(msg);
};

// es5 below
// const showMessage = function (age) {

// }

showMessage(121); //old enough
showMessage(2); //not old enough
showMessage(7); //not old enough
showMessage(0); //not old enough
