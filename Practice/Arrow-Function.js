// arrow functions 
const users = () => {
    console.log("user are already login");
}
users();


const isEven = function (number) {
    return number % 2 === 0;
}

// const isEven = number => number % 2 === 0;
console.log(isEven(4));

const findTarget = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}


// fatArrow Function 
// ES5
// var sum = function(){
//     var a = 5;
//     var b = 10;
//     return a+b;
// }

// console.log(sum());

// ES6
// const sum = () => {
//     let a = 5;
//     let b = 10;
//     return a+b;
// }

// console.log(sum());

// let a = 20;
// let b = 10;

const sum = (a, b) => a + b;
console.log(sum(25, 25));