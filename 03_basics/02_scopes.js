// local scope and global scope
var x = 20;
{
    let y = 30;
    // console.log(x);
    // console.log(y);
    var z = 40; // var is not block scoped
}
// console.log(y); // ReferenceError: y is not defined
console.log(z);