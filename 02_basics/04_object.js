const cricketer = {};
// {}
cricketer.name = "Sachin Tendulkar";
cricketer.age = 45;
cricketer.country = "India";
cricketer.runs = 18426;

// console.log(cricketer);
// nested object
const user = {
  email: "sachin@gamil.com",
  name: {
    userFullName: {
      firstname: "Sachin",
      lastname: "Tendulkar",
    },
    age: 45,
    favPlayer: {
      name: "Brian Lara",
      country: "West Indies",
    },
  },
  country: "India",
};
// console.log(user.name.favPlayer.country);

// combining two objects
const obj1 = {
  name: "Sachin",
  age: 45,
};
const obj2 = {
  country: "India",
  runs: 18426,
};
const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);

// using spread operator
const obj4 = { ...obj1, ...obj2 };
// console.log(obj4);

// Array of objects
const arr = [
  {
    name: "Sachin",
    age: 45,
  },
  {
    name: "Virat",
    age: 32,
  },
  {
    name: "Rohit",
    age: 34,
  },
];
// console.log(arr[2].age);

// console.log(Object.keys(obj4));
// console.log(Object.values(obj4));
// console.log(Object.entries(obj4));
// console.log(user.hasOwnProperty("userFullName"));

// object destructuring and JSON API
const { name, country } = cricketer;
console.log(country);

// JSON API
// const url = "https://jsonplaceholder.typicode.com/users";
// {
//   [
//     {
//       id: 1,
//       name: "Leanne Graham",
//       username: "Bret",
//       email: "learne@google.com",
//     },
//     {
//       id: 2,
//       name: "Ervin Howell",
//       username: "Antonette",
//       email: "ervin@google.com",
//     },
//   ];
// }
