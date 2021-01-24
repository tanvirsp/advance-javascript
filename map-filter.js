const numbers = [2, 5, 7,8,41,25];

const square = numbers.map(n => n * n);
console.log(square);


const eveNumber = numbers.filter(n => n % 2 == 0 );
console.log(eveNumber);



const bigNumber = numbers.find(n => n > 8);
console.log(bigNumber);



//remove nagetive valu from array;
const numbers3 = [-1,2,3,-4,5,-6,-7,8]
const num = numbers3.filter(x => x > 0 )
console.log(num);

