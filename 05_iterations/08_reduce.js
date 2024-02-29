// reduce()
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum); // 15

const shoppingCart = [
  {
    product: "phone",
    price: 699,
  },
  {
    product: "Screen Protector",
    price: 9.98,
  },
  {
    product: "Memory Card",
    price: 20.99,
  },
  {
    product: "Case",
    price: 24.99,
  },
];
const total = shoppingCart.reduce((acc, val) => acc + val.price, 100);
console.log(total); // 854.96 (100 is the initial value)