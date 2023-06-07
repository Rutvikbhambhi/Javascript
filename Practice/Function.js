
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


// const findTarget = function(array, target) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]===target) {
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray = [1,3,8,90];
// const ans = findTarget(myArray, 8);
// console.log(ans);


// const num = [1,2,3,4]
//     num.slice(2)
//     num.slice(1,3)

// console.log(num);


// function inside function
const app = () => {
    const myFunc = () => {
        console.log("hello from myFunc");
    }

    const addTwo = (num1, num2) => {
        return num1 + num2;
    }

    const mul = (num1, num2) => num1 * num2; 
    console.log("inside app");
    myFunc();
    console.log(addTwo(2,3));
    console.log(mul(2,3));
}
app();



// lexical scope 
function myApp(){
    const myVar = "value1";
    function myFunc(){
        // const my
    }
    const myFunc2 = function() {}
    const myFunc3 = () => {}
}