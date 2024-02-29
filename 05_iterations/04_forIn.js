// for in loop
// iteration over objects
const myObj = {
    "id": 1,
    name: 'John Doe',
    age: 25,
    roll: 101
}
for(let key in myObj) {
    //console.log(key, ":", myObj[key]);
}

// iteration over arrays
const myArr = ["apple", "banana", "cherry", "dates"];
for(let index in myArr) {
   // console.log(`for ${index} there is ${myArr[index]}`);
}