const user = {
    id: 1,
    name: "swarnab",
    "full name" : "Swarnab Banerjee",
    email: "swarnab@google.com",
    location: "kolkata",
    isLoggedin: false
}
console.log(user);
// accessing object properties
// console.log(user.name);
// console.log(user['name']);
// console.log(user["full name"]);
// console.log(user.full name); // error

// adding new properties
user.age = 25;
console.log(user.age);

user.greeting = function() {
    console.log("Good morning!");
}
user.greeting();
// console.log(user.greeting());