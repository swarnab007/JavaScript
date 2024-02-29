// for of loop
const arr = [1, 2, 3, 4, 5];
for(let num of arr) {
    // console.log(num);
}

// iteration over strings
const str = 'hello duniya';
for(let char of str) {
    // console.log(char);
}

// iteration over maps
const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
for(let [key,value] of map) {
   // console.log(key, "-->", value);
}

// iteration over objects
const myObj = {
    id: 1,
    name: 'John Doe',
    age: 25,
    roll: 101
}
for(let key of myObj) {
    //console.log(key); // TypeError: myObj is not iterable
}