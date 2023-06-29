// function can return functions

// function myFunc(){
//     return 1;
// }

// const ans = myFunc();
// console.log(ans);


// function printFullName(firstName, lastName){
//     function printName(){
//         console.log(firstName, lastName);
//     }
//     return printName;
// }

// const ans = printFullName("Rutvik", "Parmar");
// ans();


function myFunction(power){
    return function(number){
        return number ** power
    }
}

const square = myFunction(2)
const ans = square(3)
console.log(ans); 


const cube = myFunction(3);
const ans2 = cube(3);
console.log(ans2);