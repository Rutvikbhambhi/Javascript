
// function declaration
// function users(){
//     console.log("user are already login");
// }

// function twoPlusFour(){
//     return 2+4;
// }

// const returnedValue = twoPlusFour();

// console.log(returnedValue);


// function expression
const users = function(){
    console.log("user are not login");
}
users();

// function isEven(number){
//     if(number % 2 === 0){
//         return true
//     }
//         return false
// }

// console.log(isEven(2));


function findTarget(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]===target) {
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,8,90];
const ans = findTarget(myArray, 8);
console.log(ans);