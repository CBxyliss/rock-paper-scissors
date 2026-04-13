/* Create the game rock, paper, scissors */

/* Write the logic to get computer's choice */

/* Generate number from 1 to 3 */
const min = 1
const max = 3

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

/* Use if...else statements to get computer choice based on number generated */

function getComputerChoice() {
    if (randomNumber === 1) {
        return "rock"
    } else if (randomNumber === 2) {
        return "paper"
    } else if (randomNumber === 3) {
        return "scissors"
    }
} 

console.log(getComputerChoice());