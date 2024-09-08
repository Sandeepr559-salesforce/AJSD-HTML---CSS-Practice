//Case study
"use strict"
// Create a array of Players object like this
let players = [
    { Name: "Dhoni", age: 40, score: 200 },
    { Name: "Virat", age: 35, score: 250 },
    { Name: "Rohit Sharma", age: 33, score: 100 },
    { Name: "Rahul", age: 25, score: 450 }
];

// const maxScore= players.reduce((maxScore,currentObj)=>{return currentObj.score>maxScore.score?currentObj:maxScore;},players[0]);
const maxScore = Math.max(...players.map(currentItem => currentItem.score));
console.log(`Maximum Score:: ${maxScore}`);


// 2. Calculate the total score of all the players and display
function callbackFn(accumulatorsum, currentItem) {
    return accumulatorsum + currentItem.score;
}

const totalScore = players.reduce(callbackFn, 0);
console.log(totalScore);

const totalScoreArrow = players.reduce((sumaccumulator, player) => sumaccumulator + player.score, 0);
console.log(`Total Score using Arrow function:: ${totalScoreArrow}`);

const averageScore = totalScoreArrow / players.length;
console.log(`Average score:: ${averageScore}`);

const percentageAvgScore = (averageScore / totalScoreArrow) * 100;
console.log(`Percentage of the average score:: ${(percentageAvgScore)}%`);

//3. Find the player whose age is between 30 to 40
const playerfilter = players.filter((currentItem) => currentItem.age > 30 && currentItem.age < 40);
console.log(playerfilter);

//4. Get all the players whose name starts with "D"
const startWithD = players.filter((currentItem) => currentItem.Name.startsWith("D"));
console.log(startWithD);

//5. Check if a given player is present in the object array or not
const playerExist = players.filter((currentItem) => currentItem.Name.includes("Rahul"));
const printPlayer = playerExist.length > 0 ? playerExist : "Player doesn't exist";
console.log(printPlayer);

//6. Get the Top 2 players inside two separate objects(Dhoni,virat) and the last few players in a separate array object(Remaining Players). (use Destructuring concept)
players.sort((a, b) => b.score - a.score);
let [topPlayer1, topPlayer2, ...remainingPlayers] = players;
let topPlayers = { topPlayer1, topPlayer2 };
console.log(topPlayers);
console.log(remainingPlayers);

//7. If the score of the players is less than 90% then don't add them in a new players list(array). Display the new TOP Players list.(try to use callback functions to check the percentage of score).
//array.filter(callback(element, index(optional), arr(optional)), thisValue(optional))

function callbackFunction(player) {
    return player.score >= 0.9 * averageScore;
}

let newPlayersList = players.filter(callbackFunction);

console.log(newPlayersList);

//8. Group the players based on the age group of players using reduce function
/* This code snippet is grouping the players based on their age into different age groups using the
`reduce` function. */

const groupedPlayers = players.reduce((acc, player) => {
    // Initialize an empty string to store the age group for the current player
    let ageGroup = '';

    // Determine the age group based on the player's age
    if (player.age >= 30 && player.age <= 40) 
    {
        // If the player's age is between 30 and 40 (inclusive), set ageGroup to '30-40'
        ageGroup = '30-40';
    } 
    else if (player.age >= 20 && player.age < 30) 
    {
        // If the player's age is between 20 and 29 (inclusive), set ageGroup to '20-30'
        ageGroup = '20-30';
    }

    // Check if the accumulator object already has an array for the current age group
    if (!acc[ageGroup]) 
    {
        // If the age group doesn't exist yet, create an empty array for it
        acc[ageGroup] = [];
    }

    // Add the current player to the array corresponding to their age group
    acc[ageGroup].push(player);

    // Return the accumulator object so it can be used in the next iteration
    return acc;
}, {}); // Initialize the accumulator as an empty object

// Log the grouped players to the console
console.log(groupedPlayers);

