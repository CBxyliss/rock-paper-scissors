function getComputerChoice() {
    const option = Math.floor(Math.random() * 3);
    if (option === 0) {
        return "rock";
    } else if (option === 1){
        return "paper"
    } else {
        return "scissors";
    }   
} 

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?");
    return choice.toLowerCase();
}

function getWinner(humanScore, computerScore) {
    if (humanScore === computerScore) {
        return `It's a tie! Score: ${humanScore}, Computer Score: ${computerScore}`;
    } else if (userScore > computerScore) {
        return `You win! Score: ${humanScore}, Computer Score: ${computerScore}`;
    }
    return `Computer Wins! Score ${humanScore}, Your Score: ${humanScore}`;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 1;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log(`Draw, both players picked ${humanChoice}`)
        } else if (
            (humanChoice === `paper` && computerChoice === `rock`) ||
            (humanChoice === `rock` && computerChoice === `scissors`) ||
            (humanChoice === `scissors` && computerChoice === `paper`)
        ) {
            console.log(`You Win! "${humanChoice} "beats" ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        rounds++
    }

    while (rounds <= 5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(computerChoice, humanChoice);
    }
    return getWinner (humanScore, computerScore);
}

let results = playGame();
console.log(results);