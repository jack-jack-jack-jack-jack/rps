const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// const getHumanChoice = () => {
//     const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
//     if (['rock', 'paper', 'scissors'].includes(choice)) {
//         return choice;
//     } else {
//         alert("Invalid choice. Please try again.");
//         return getHumanChoice();
//     }
// }

let humanScore = 0
let computerScore = 0

  
const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        scoreBoard.textContent = "It's a tie!"
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        scoreBoard.textContent = `You win! ${humanChoice} beats ${computerChoice}.`
    } else {
        computerScore++;
        scoreBoard.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`
    }
}

// UI

const btns = document.querySelectorAll("button")
const scoreBoard = document.querySelector("p")

btns.forEach(btn => 
    btn.addEventListener("click", () => {

        if (humanScore === 5 || computerScore === 5) return;

        const player = btn.textContent.toLowerCase()
        const computer = getComputerChoice()

        playRound(player,computer)

        if(humanScore === 5) {
            scoreBoard.textContent = "Humans wins! Game over."
        } else if (computerScore === 5) {
            scoreBoard.textContent = "Computer wins! Game over."
        }
}))