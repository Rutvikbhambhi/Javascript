// ES5
// function sum(a,b){
//     console.log(a+b);
// }

// sum(1,2,3,4,5,6);

// ES6
// function sum(...inputs) {
//     console.log(...inputs);
//     let total = 0;
//     for (let i of inputs) {
//         total += i;
//     }
//     console.log(total);
// }

// sum(1, 2, 3, 4, 5, 6);

function fun(a, b, ...c) {
    console.log(`${a} ${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('Aditya'));
}
fun('Rutvik', 'Rahul', 'vijay', 'Aditya')