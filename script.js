const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const getHumanChoice = () => {
    const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (['rock', 'paper', 'scissors'].includes(choice)) {
        return choice;
    } else {
        alert("Invalid choice. Please try again.");
        return getHumanChoice();
    }
}

let humanScore = 0
let computerScore = 0

const playGame = () => {
    
    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
}

playGame();
 