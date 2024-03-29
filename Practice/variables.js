
// declare variable with var keyword
// var firstName = "Rahul";
// var firstName = "Rutvik";
// console.log(firstName);


// declare variable with let keyword
// let Name = "Rutvik";
// Name = "Meet";
// console.log(Name);


// declare constants
// const pi = 3.14;
// console.log(pi);


// String indexing
// let Rutvik = "Rutvik";
// console.log(Rutvik.length); // 6
// console.log(Rutvik[Rutvik.length-4]); // t


// String Method

// trim()
// toUpperCase()
// toLowerCase()
// slice()
// let first_Name = "   Rutvik";
// console.log(first_Name.length);
// first_Name = first_Name.trim();
// console.log(first_Name);
// console.log(first_Name.length);

// let first_Name = "Rutvik";
// first_Name = first_Name.toUpperCase();
// first_Name = first_Name.toLowerCase();
// console.log(first_Name);

// let first_Name = "Rutvik";
// let Name = first_Name.slice(0,4)
// console.log(Name);



// Data Type 

// String / "Rutvik"
// number / 2,4,5,6 
// booleans  
// undefined  
// null  
// BigInt  
// Symbol

// let ages = 20;
// let firstName = "Rutvik"
// console.log(typeof ages);

// convert to number to string.
// let ages = 20;
// ages = ages + "";
// console.log(typeof(ages)); // "20"

// convert to string to number.
// let myStr = +"20";
// console.log(typeof myStr); //Number

// let age = 18;
// age = String(age);
// console.log(typeof age); //String


// String Concatenation
let string1 = "20"
let string2 = "19"

let newString = +string1 + +string2;
console.log(newString); // 39


// template string
let ages = 20;
let firstName = "Rutvik"

let aboutMe = `my name is ${firstName} and my age is ${ages}`
console.log(aboutMe); //my name is Rutvik and my age is 20


// Array Destructuring
const myproglang = ['html', 'css', 'js', 'react-js'];

// ES-6
// let [top1, top2, top3, top4, top5] = myproglang;
// console.log("my fav prog lang is " + top1);

// console.log(myproglang.length);

// let [top1, , , toplast] = myproglang;
// console.log(`my fav pro lang is ${top1} and my last fav is ${toplast} `);


// Object Destructuring
const bioData = {
    name: "Rutvik",
    age: 20,
    deg: "B.A",
    hobby: {
        first: "playing",
        sec: "youtube videos"
    }
}

let { name: myname, age: age, deg, hobby } = bioData;

console.log(`my name is ${myname}. my age is ${age}. my degree is ${deg}. I love makking ${hobby.sec }`);


// undefined 
// let firstName;
// console.log(typeof firstName); // undefined
// firstName = "Rutvik";
// console.log(typeof firstName, firstName); //string Rutvik

// null 
let myVariable = null;
console.log(myVariable); // null
myVariable = "Rutvik";
console.log(myVariable, typeof myVariable); // Rutvik string
console.log(typeof null); // object  // -----> bug , error

// BigInt
let myNumber = BigInt(15);
let sameMyNumber = 123;
console.log(myNumber); //15n
// console.log(Number.MAX_SAFE_INTEGER);


// Boolean 
let num1 = 7;
let num2 = 6;
console.log(num1 > num2); //true