// UI
const btns = document.querySelectorAll("button")
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        let humanChoice = btn.textContent.toLowerCase() 
        playGame(humanChoice)
    })}
)

const display = document.querySelector(".display")

// LOGIC
const playGame = (humanChoice) => {
    let humanScore = 0
    let computerScore = 0 

    const getComputerChoice = () => {
        const choices = ['rock', 'paper', 'scissors']
        return choices[Math.floor(Math.random() * choices.length)]
    }

    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice) {
            display.textContent = "It's a tie!"
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++
        } else {
            computerScore++
        }
    }

    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    if (humanScore > computerScore) {
        display.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}.  Human wins the game!`
    } else if (computerScore > humanScore) {
        display.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}.  Computer wins the game!`
    } else {
        display.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}.  It's a tie game!`
    }
}

