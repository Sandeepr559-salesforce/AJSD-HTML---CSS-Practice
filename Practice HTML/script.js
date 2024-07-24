//Callback Function
//emoji
//high5--> callback function(🙌)
//allTheBest --> callback Function(👍)
const high5 = function () 
{
    console.log('🙌');
}

//callback function for the all the best
const allTheBest = function () 
{
    console.log('👍');
}

//mainFunction --> HigherOrderFunction
//Accepts the another function as a parameter
const printEmoji = function (fn)//Higher-order function
{
    fn();//invoking the callback function
}

printEmoji(allTheBest);//Passing the function as an argument without function braces

//Cube and square of the number
//1.Callback fn --> Cube
//2.Callback fn --> Square

//1.Callback fn --> Cube
const cube = function (num) 
{
    return num ** 3;//Cube of the number
}

//2.Callback fn --> Square
const sqr = function (num) 
{
    return num ** 2;//Cube of the number
}

const operator = function (num, callbackFn) 
{
    console.log('Function name: ', callbackFn.name);
    console.log('Square of ' + num + ' is ' + callbackFn(num));
}

operator(6, sqr);
operator(5, cube);