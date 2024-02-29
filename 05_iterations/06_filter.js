let players = ["kohli", "dhoni", "sachin", "dravid", "sehwag", "yuvraj", "zaheer"];
const batsman = players.forEach((player) => {
    return player;
});
// console.log(batsman);  // forEach does not return anything

// filter()
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter((item) => {
    return item % 2 === 0;
});
// console.log(result);  

// filter() with objects
players = [
    {
        name: "kohli",
        role: "batsman",
        runs: 10000
    },
    {
        name: "dhoni",
        role: "wicketkeeper",
        runs: 5000
    },
    {
        name: "sachin",
        role: "batsman",
        runs: 15000
    },
    {
        name: "jadeja",
        role: "all-rounder",
        runs: 3000
    },
    {
        name: "zaheer",
        role: "bowler",
        runs: 1000
    }
]
let batsmen = players.filter((player) => player.role === "batsman");
batsmen = players.filter((player) => {
    return player.role === "batsman" && player.runs > 3000;
});
console.log(batsmen);