const student = {
    name: 'John',
    age: 23,
    greet: function() {
        // this works for objects only
        // console.log('Hello, my name is ' + this.name);
        // it will print the object
        // console.log(this);
    }
}
// student.greet();
// student.name = "swarnab";
// student.greet();
// console.log(this); // it will print the global object (window in browser, global in node.js)

function one() {
    let username = "swarnab";
    // console.log(this.username);
}
one();

// Arrow function
const addTwo = (a, b) => {
    return a + b;
}
// console.log(addTwo(2, 3));
const addThree = (a, b, c) => a + b + c;
// console.log(addThree(2, 3, 4));

// returning object
const welcome = () => ({name: "swarnab", age: 23});
// console.log(welcome());