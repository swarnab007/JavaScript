
// stack and heap

let myName = "John";
// console.log(myName);
myName = "Jane";
console.log(myName);

let changeName = myName;
changeName = "Jim";
console.log(myName);
console.log(changeName);

let myObj = {
    id: 1,
    name: "swarnab",
    roll: 23
};
let newObj = myObj;
newObj.roll = 32;
console.log(myObj.roll);