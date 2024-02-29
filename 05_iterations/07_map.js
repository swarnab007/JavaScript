const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squares = nums.map((num) => {
  return num * num;
});
// console.log(squares);

// chaining
const modifiedNums = nums
  .map((num) => num + 2)
  .map((num) => num * 5)
  .filter((num) => num >= 20);
console.log(modifiedNums);