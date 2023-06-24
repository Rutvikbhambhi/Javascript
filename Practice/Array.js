
// Array
// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits);


// Array push pop

// Array shift unshift

// pop 
// let fruits = [1,2,3,4,5];
// fruits.pop()
// console.log(fruits); // 1,2,3,4

// push 
// let fruits = [1,2,3,4,5];
// fruits.push(6)
// console.log(fruits); // 1,2,3,4,5,6

// shift 
// let fruits = [1,2,3,4,5];
// fruits.shift()
// console.log(fruits); // 2,3,4,5

// unshift 
// let fruits = [1,2,3,4,5];
// fruits.unshift(0)
// console.log(fruits); // 0,1,2,3,4,5



// primitive vs reference data types 
// let num1 = 6;
// let num2 = num1;
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// num1++;
// console.log("after incrementing num1");
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);



// reference types 
// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log("array1", array1);
// console.log("array2", array2);
// array1.push("item3");
// console.log("after pushing element to array 1");
// console.log("array1", array1);
// console.log("array2", array2);



// how to clone array

// how to concatenate two array

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0);
let array2 = [].concat(array1, ["item3", "item4"]);


// spread operator
// let array2 = [...array1];
array1.push("item3");

console.log(array1 === array2);
console.log(array1);
console.log(array2);


// For loop in Array 
// let fruits = ["apple", "mango", "grapes", "banana"];

// for(let i=0; i<=9; i++) {
//     console.log(i);
// }

// for(let i=0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }
// console.log(fruits[fruits.length-2]);


// use const for creating array
// const fruits = ["apple", "mango"];
// fruits.push("banana");
// console.log(fruits);


// while loop in array 
// const fruits = ["apple", "mango", "grapes"];
// const fruits2 = [];

// let i = 0;
// while(i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }
// console.log(fruits2);


// For in loop in array 
const fruits = ["apple", "mango", "grapes", "papita"]
const fruits2 = [];

// for(let index in fruits) {
//     fruits2.push(fruits[index].toLowerCase())
// }
// console.log(fruits2);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// array destructuring
const myArray = ["value", "value2", "value3", "value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
let [myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);