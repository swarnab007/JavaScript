function myFunction() {
  // console.log("Hello World!");
}

myFunction();

// function with parameters
function greet(name) {
  // console.log("Hello " + name);
}
greet("Sachin");

// function with return
function add(a, b) {
  return a + b;
}
// console.log(add(2, 3));

function isLogin(username) {
  if (username === undefined) {
    console.log(`Please login first!`);
    return;
  }
  else {
    console.log(`Welcome ${username}`);
  }
}
//isLogin();


// functions with objects and arrays
// function addPrice(...num) {
//     return num;
// }
// console.log(addPrice(1, 2, 3, 4, 5));

// objects
const user = {
    name: "swarnab",
    college: "AOT",
    branch: "ECE"
};
function getUserDetails(student) {
    return `Name of the student is ${user.name}`;
}
console.log(getUserDetails(user));

// arrays
const fruits = ["apple", "banana", "mango"];
function getFruits(allFruits) {
    return allFruits[2];
}
console.log(getFruits(fruits));
console.log(getFruits(["cocunut", "grapes", "orange"]));