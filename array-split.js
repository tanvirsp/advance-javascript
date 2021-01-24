const numbers = [1,2,3,4,5,6,7,8,9,10];
const part = numbers.slice(2, 5);
console.log(part);


const removed = numbers.splice(4, 3);
console.log(removed);
console.log(numbers);

const together = numbers.join ('-, ');
console.log(together);