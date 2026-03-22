const playGame = () => {
    let humanScore = 0
    let computerScore = 0 

    const getComputerChoice = () => {
        const choices = ['rock', 'paper', 'scissors']
        return choices[Math.floor(Math.random() * choices.length)]
    }

    const getHumanChoice = () => {
        return prompt("Enter either 'rock', 'paper' or 'scissors:").toLowerCase()
    }

    const playRound = (humanChoice, computerChoice) => {
        console.log(`You: ${humanChoice} | Computer: ${computerChoice}`)

        if (humanChoice === computerChoice) {
            console.log("It's a tie!")
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++
            console.log("You win this round!")
        } else {
            computerScore++
            console.log("Computer wins this round!")
        }

        console.log(`Score → You: ${humanScore}, Computer: ${computerScore}`)
    }

    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())

    console.log("=== Final Result ===")
    if (humanScore > computerScore) {
        console.log("🎉 You win the game!")
    } else if (computerScore > humanScore) {
        console.log("💻 Computer wins the game!")
    } else {
        console.log("It's a tie game!")
    }
}

playGame()


