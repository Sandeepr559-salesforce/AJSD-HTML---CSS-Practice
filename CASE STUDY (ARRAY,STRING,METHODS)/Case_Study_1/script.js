//Case study
"use strict"
//1. A chocolate factory produces various varieties of chocolates.(say 10 varieties)
const chocolates = [
    "CoffeeBite",
    "Cadbury",
    "KitKat",
    "NutMi1k",
    "Ferraro Rocher",
    "Toblerone",
    "Hershey Miniatures",
    "Lindt",
    "Galaxy",
    "Amul"
];

console.log(chocolates);

const chocolateName = "Hershey Miniatures";

//By using callback function
console.log(`-----Callback Function-----`);
console.log(chocolates.some(callbackFn));
function callbackFn(currentElement) {
    if (currentElement == chocolateName)
        return true;
    else
        return false;
}

//By using arrow function
console.log(`-----Arrow Function-----`);
console.log(chocolates.some(currentElement=>currentElement==chocolateName));

//2. New launch of Milk chocolates introduced replacing the CoffeeVarieties(USE SPLICE,indexOf)
const indexOfChocolate=chocolates.indexOf("CoffeeBite");
console.log(`Index of coffee varities ${indexOfChocolate}`);
const splicedArray=chocolates.splice(indexOfChocolate,1,"Milk Chocolate");
console.log(`Spliced array:: ${splicedArray}`);
console.log(`chocolates array:: ${chocolates}`);
// const updatedChocolates=chocolates.push("Milk Chocolate");
// console.log(`Index of new chocolates ${updatedChocolates}`)
// console.log(`${chocolates}`);

//3. Create a new NUTS Chocolate box(array from the Original Chocolate Box(Array) (slice)
const nutsChocolateBox=chocolates.slice();
console.log(nutsChocolateBox);

//4. Add more varieties of TOP selling candies to the beginning of the array.
const topSelling=["Silk","Bornville"];
chocolates.unshift(...topSelling);
console.log(chocolates);

//5. Check if the Chocolate Array is empty , if so add more
const emptyChocolateArray=[];
console.log(emptyChocolateArray);
emptyChocolateArray.length?0:emptyChocolateArray.unshift(...topSelling);
console.log(emptyChocolateArray);

//6. Add "CANDY" at the end of each chocolate name.
const updateChocolate = chocolates.map((currentElement)=>currentElement+" Candy");
console.log(updateChocolate);


