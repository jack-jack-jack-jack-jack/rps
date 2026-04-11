// UI
const display = document.querySelector(".display")

const btns = document.querySelectorAll("button")
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        let humanChoice = btn.textContent.toLowerCase() 
        playGame(humanChoice)
    })}
)

// LOGIC
let humanScore = 0
let computerScore = 0 
let gameOver = false

const checkScore = () => {
    if (humanScore === 5 || computerScore === 5) {
        gameOver = true
        if (humanScore > computerScore) {
            display.textContent = "Human wins the game!"
        } else {
            display.textContent = "Computer wins the game!"
        }
    }
}

const playGame = (humanChoice) => {

    const computerChoice = () => {
        const choices = ['rock', 'paper', 'scissors']
        return choices[Math.floor(Math.random() * choices.length)]
    }

    const playRound = (humanChoice, computerChoice) => {
        if (gameOver) return 

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

        checkScore()

        if (!gameOver) {
            display.textContent = `The computer has a score of ${computerScore} and the human has a score of ${humanScore}`
        }
    }

    playRound(humanChoice, computerChoice());
}
