// for each loop
const colors = ['red', 'green', 'blue', 'yellow'];
colors.forEach( function(color) {
   // console.log(color);
})
colors.forEach((color) => {
   // console.log(color);
})
colors.forEach((index, value, arr) => {
    console.log(index, value, arr);
})

const myCoding = [
    {
        id: 1,
        lang: 'Python',
        type: 'interpreted'
    },
    {
        id: 2,
        lang: 'Java',
        type: 'compiled'
    },
    {
        id: 3,
        lang: 'JavaScript',
        type: 'interpreted'
    }
]
myCoding.forEach((coding) => {
   // console.log(coding.lang, coding.type);
})