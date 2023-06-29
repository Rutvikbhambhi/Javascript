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


// function myFunction(power){
//     return function(number){
//         return number ** power
//     }
// }

// const square = myFunction(2)
// const ans = square(3)
// console.log(ans); 


// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2);


// function func() {
//     let counter = 0;
//     return function(){
//         if (counter < 1) {
//             console.log("Hii You Called Me");
//             counter++;
//         } else {
//             console.log("I am already called");
//         }
//     }
// }

// const myFunc = func();
// myFunc();
// myFunc();
// const myFunc();


// var sum = function (a) {
//     console.log("Hello Viewer" + a);
//     var c = 4;

//     // Anonymous Function
//     return function (b) {
//         return a + b + c;
//     }
// }
// var store = sum(2); //calling
// console.log(store(5));


var sum = function (a, b, c) {

    return {
        getSumTwo: function () {
            return a + b;
        },
        getSumThree: function () {
            return a + b + c;
        }
    }
}
var store =    sum(3,4,5); // calling
console.log(store.getSumTwo());
console.log(store.getSumThree());