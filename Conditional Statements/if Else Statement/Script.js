/*Check if a person is eligible for UPSC exam, Provided with Age,NumberOfAttempts and Nationality
    1. Restrict exam if Nationality is other than Indian
    2. Restrict Retaking the Exam if the NumberOfAttempts is more than 3 times
    3. Allow registration if the age is between 18 to 25
    4. If all the criterias are met allow to Register for Examination
    Display the message accordingly.*/
"use strict"
const upscExam = (name, nationality, numberOfAttempts, age) => {
    if (nationality == "Indian" && numberOfAttempts <= 3 && age >= 18 && age <= 25) 
    {
        console.log(`${name} you're eligible for attempting the exam. Number of attempts is ${numberOfAttempts}`);
    }
    else 
    {
        console.log(`You're not eligible to attempt this exam because of the criteria mentioned below \n 
        Nationality=${nationality} Expected: Indian\n
        Number of Attempts=${numberOfAttempts} Expected:> more than 3\n
        Age: ${age} Expected: Between 18-25`);
    }
}
upscExam("Sandeep", "Indian", 2, 24);
upscExam("Sricharan", "USA", 2, 24);