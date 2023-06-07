// arrow functions 
const users = () => {
    console.log("user are already login");
}
users();


const isEven = function(number){
    return number % 2 === 0;
}

// const isEven = number => number % 2 === 0;
console.log(isEven(4));

const findTarget = (array, target) => {
    for(let i = 0; i<array.length; i++) {
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}