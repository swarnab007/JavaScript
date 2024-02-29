// normal function IIFE
(function Hello () {
    console.log('Hello');
})();

// with parameters and arrow function
( (name) => {
    console.log("Hello " + name);
})("jane");