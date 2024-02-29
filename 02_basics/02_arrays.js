let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

// let newArr = arr1.concat(arr2);
// console.log(newArr);

// using spread operator
let newArr = [...arr1, ...arr2];
console.log(newArr);

// Flatten the array in one level
let arr3 = [1,2, [3, 5] , [6, 7, [68, 9]]];
console.log(arr3.flat(4));

let arr4 = [1, 2, 4];
let arr5 = [3, 5, 6];
console.log(Array.of(arr4, arr5));