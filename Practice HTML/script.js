//Objects in JS

"use strict"

//Factory function- Produces the object and avoids the repeated lines of code as mentioned above
let car={
    //key:value pairs
    brand:"Honda",
    Model:"SUV",
    color:"Red",
    make:2000
};
//If object destructing is not present we need to write code as mentioned below
// let brand=car.brand;
// let model=car.model;
// let make=car.make;
// let color=car.color;

//Object destructuring
//Unpacking the properties of an object into an separate variables
const {brand,Model,make}= car;
console.log(brand);
console.log(Model);
console.log(make);