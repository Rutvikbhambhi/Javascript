export const Lname ="Bhambhi";

export class Person {
    constructor(name,age) {
      this.name = name;
      this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} my age ${this.age}`);
      }
    }  