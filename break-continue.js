const numbers = [1,2,3,4,-5,6,7,8,9,11,12,13,14];
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 5){
        break;
    }
    const element = numbers[i];
    console.log(element);
}



const numbers2 = [1, 2, 3, -4, 5, -6, -7];
for (let i = 0; i < numbers2.length; i++) {
    if(numbers2[i] < 0){
        continue;
    }
    const element2 = numbers2[i];
    console.log(element2)
    
}




