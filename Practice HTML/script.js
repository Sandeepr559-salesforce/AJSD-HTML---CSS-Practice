/**
 * The code demonstrates the use of arrow functions in JavaScript for age calculation with different
 * variations in parameter handling and return statements.
 */
//Arrow Functions
//Special type of function expression

//Function expression
// const print=function ()
// {
//     console.log("AJSD");
// }
// print();
//Arrow Function
const print = () => console.log("AJSkil");
print();

//Arrow function with 1 parameter and return statement
//Age Calculation
const age = function (yearOfBirth) {
  return 2024 - yearOfBirth;
};
console.log(age(2000));

//How to convert the above function Expression to Arrow Function
const age1 = (yearOfBirth) => 2024 - yearOfBirth;

//How to invoke/call this
console.log(age1(1995));

//Arrow function with MULTIPLE statements in the BODY
//When we have multiple statements in the body then we need to use return statement
const age2 = (yearOfBirth) => {
  let calc = 2024 - yearOfBirth;
  return calc;
};
console.log(age2(1999));
//Arrow function with multiple PARAMETERS
//1.YearOfBirth(parameter 1)
//2.CurrentYear(Parameter 2)
const age3 = (yearOfBirth, currentYear) => {
  let calc = currentYear - yearOfBirth;
  return calc;
};
console.log(age3(1966, 2024));