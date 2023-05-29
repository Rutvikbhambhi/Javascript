
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
// console.log(Rutvik.length);
// console.log(Rutvik[Rutvik.length-1]);


// String Method

// trim()
// toUpperCase()
// toLowerCase()
// slice()
// let first_Name = "Rutvik";
// console.log(first_Name.length);
// first_Name = first_Name.trim();
// console.log(first_Name);
// console.log(first_Name.length);

// first_Name = first_Name.toUpperCase();
// first_Name = first_Name.toLowerCase();
// console.log(first_Name);

// let newString = first_Name.slice(0,4)
// console.log(newString);



// Data Type 

// String / "Rutvik"
// number / 2,4,5,6 
// booleans  
// undefined  
// null  
// BigInt  
// Symbol

// let age = 20;
// let firstName = "Rutvik"
// console.log(typeof age);

// convert to number to string.
// age = age + "";
// console.log(typeof(age)); "20"

// convert to string to number.
// let myStr = +"20";
// console.log(typeof myStr);

// let age = 18;
// age = String(age);
// console.log(typeof age);



// String Concatenation
// let string1 = "20"
// let string2 = "19"

// let newString = +string1 + +string2;
// console.log(newString);



// template string
// let age = 20;
// let firstName = "Rutvik"

// let aboutMe = `my name is ${firstName} and my age is ${age}`
// console.log(aboutMe);


// undefined 
let firstName;
console.log(typeof firstName);
firstName = "Rutvik";
console.log(typeof firstName, firstName);

// null 
let myVariable = null;
console.log(myVariable);
myVariable = "Rutvik";
console.log(myVariable, typeof myVariable);
console.log(typeof null); // -----> bug , error

// BigInt
let myNumber = BigInt(15);
let sameMyNumber = 123;
console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);


// Boolean 
let num1 = 7;
let num2 = 6;
console.log(num1>num2);