/*
5. Print numbers from 10 to 1 with delay of 1 second between each value being printed using setTimeout using pre ES6 features only

*/

const num = 10;
const initial = 1;

for (let i = num; i >= initial; i--) {
    setTimeout(() => {
        console.log(i)
    }, (num - i) * 1000);
}