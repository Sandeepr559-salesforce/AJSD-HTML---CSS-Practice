//Main Case Study


/*1. Create a function to calculate the Area of Rectangle 
using a function.(function declaration/function expression)*/
//Area of the Recetangle = Length X Breadth
console.log("===========1st Case Study===========");
const calcRectArea = function (length, Breadth)
{
    console.log('Area of Rectangle:: ' + (length * Breadth) + ' metres');
}
calcRectArea(10, 5);


/*2. Create a callback function to display a welcome message if any text is passed to it. 
Other than text(other DataType) if any other parameter passed display an error message back. 
If "JAVASCRIPT passed as an argument.Example : "Welcome ! to JAVASCRIPT"*/
console.log("===========2nd Case Study===========");
const welcomeMsg = function (inputtext) 
{
    const msg = 'Hi there! Welcome to ' + inputtext;
    return msg;
}

const errorMsg = function (inputtext) 
{
    return "“Oops! Something went wrong.”";
}

const getInput = function (inputData) 
{
    const input=inputData;
    console.log("DataType::"+typeof input);
    const message = (typeof input == "string") ? printMessage(inputData, welcomeMsg) : printMessage(inputData, errorMsg);
}

const printMessage = function (inputData, fn) 
{
    console.log('Function Executed:: ' + fn.name);
    console.log(fn(inputData));
}
getInput("AJSD");
getInput(123);

/*3. Create a callback function to concatenate(+) two strings 
if strings are passed as parameter else if numbers as parameters add the two numbers,
 other than these two data types return an "invalid operation".*/
 console.log("===========3rd Case Study===========");
const concatenate = function (input1, input2) 
{
    console.log(input1+' '+input2);
}
const addNumber = function (input1, input2) 
{
    console.log(input1+input2);
}

const getResult = function (input1, input2) 
{
    const inputOne=input1;
    const inputTwo=input2;
    const printOutput= (typeof inputOne == "string"&& typeof inputTwo=="string")?printResult(inputOne,inputTwo,concatenate):
    (typeof inputOne == 'number'&& typeof inputTwo=='number')?printResult(inputOne,inputTwo,addNumber):'Invalid Operation';
}

const printResult = function(inputData1,inputData2,fn)
{
    console.log('Function Executed:: ' + fn.name);
    fn(inputData1,inputData2);
}
getResult("String 1","String 2");
getResult(10,5);

 /*4.Create a currency convertor
 a. Creare multiple callback functions for calculating the currency of
    i.Indian(Rs) --> Candian Dollar(CAD)
    ii.Indian(Rs) --> American Dollar(USD)
 */

 console.log("===========4th Case Study===========");
 const CandianDollarPrice=60.61;
 const USDPrice=83.73;
 const toCAD =function(amount)
 {
return amount/CandianDollarPrice;
 }

 const toUSD =function(amount)
 {
return amount/USDPrice;
 }
 const conversion = function(amount,fn)
 {
    console.log('Rupee : '+amount+'\nRate :$ '+fn(amount)+'\nFunction called : '+fn.name);
 }
 conversion(500,toCAD);
 conversion(500,toUSD);
/*5.Create an arrow function to find the BMI of a person, 
if the height, weight, age are passed as parameters.*/
console.log("===========5th Case Study===========");

const BMI=(weight,height)=> weight/(height**2);
console.log(BMI(66,1.75));
