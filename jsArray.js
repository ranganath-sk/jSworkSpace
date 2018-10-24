var numbers = [45,2, 34,10,2];

var res = numbers.every(myFunction);

function myFunction(value) {

    return value > 34;
}

console.log("result is: ", res);

var res = numbers.some(myFunction);

console.log("result is: ", res);

console.log("The first occurence of the value 2 in the array: ", numbers.indexOf(2,2));
console.log("The last occurence of the value 2 in the array: ", numbers.lastIndexOf(2));
// var numbers2 = numbers.map(myFunction);

// var numbers3 = numbers.filter(myFunction02);

// var numbers4 = numbers.reduce(myFunction03,9);


// function myFunction(value) {
//     return value *2;
// }

// function myFunction02(value) {
//     return value > 20;
// }

// function myFunction03(total, value) {
//     return total + value;
// }

// console.log(numbers2);

// console.log(numbers);

// console.log(numbers3);
// console.log(numbers);

// console.log(numbers4);
// console.log(numbers);
