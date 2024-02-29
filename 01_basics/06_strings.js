let str = "Hello World!";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.charAt(6));

console.log(str.indexOf("World"));

// this will give a new string
console.log(str.slice(4, 10));
// console.log(str.substr(4, 6));

let str1 = "   Hello World!"
console.log(str1.trim());

console.log(str.replace("World", "Universe"));

let str2 = "Hello,World,user";
console.log(str.split(","));

const url = "https://www.google.com";
console.log(url.includes("https"));