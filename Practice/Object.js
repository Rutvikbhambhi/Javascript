
// how to create object 

// const person = {name: 'Rutvik', age: 22};
// const person = {
//     name: "Rutvik",
//     age: 20,
//     hobbies: ["guitar", "sleeping", "listening music"]
// };
// console.log(person);


// how to access data from objects 
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["hobbies"]);


// how to add key value pair to objects
// person.gender = "male";
// console.log(person);


// dot and bracket notation 
const key = "email";
const person = {
    name: "Rutvik",
    age: 20,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// console.log(person["person hobbies"]);
// person[key] = "rutvik@gmail.com";
// console.log(person);


// for in loop
// Object.keys

// for(let key in person){
    // console.log(`${key} : ${person[key]}`);
    // console.log(key, " : ", person[key]);
// }

for (let key of Object.keys(person)){
    console.log(person[key]);
}


// computed properties
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

const obj = {}

obj[key1] = value1;
obj[key2] = value2;

console.log(obj);


// Object destructuring
const name = {
    Name: "Rutvik",
    age: 20, 
};

const { Name, age } = name;
console.log(name);






let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]




const user = {
    id: 42,
    displayName: "jdoe",
    fullName: {
      firstName: "Jane",
      lastName: "Doe",
    },
};


function userId({ id }) {
    return id;
}
  
console.log(userId(user)); // 42