// lexical environment, scope chain 

const lastName = "Parmar";

const printName = function(){
    const firstName = "Rutvik";
    function myFunction() {
        console.log(firstName);
        console.log(lastName);
    }
    myFunction(); 
}
printName();
