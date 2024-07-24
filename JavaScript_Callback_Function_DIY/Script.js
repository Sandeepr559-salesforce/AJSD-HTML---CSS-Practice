/* Create two callback functions to display welcome message with the parameter passed as name and Thank you Message with the parameter passed as name.*/
const welcomemsgFunction=function(name)
{
    const welcomeMsg='welcome '+name;
    return welcomeMsg;
}

const thankYouMessage=function(name)
{
    const thankMsg='Thank You '+name;
    return thankMsg;
}

const printMessage= function(name,fn)
{
    console.log('Function Name: '+fn.name);
    console.log(fn(name));
}

printMessage('Sandeep',welcomemsgFunction);
printMessage('Sandeep',thankYouMessage);