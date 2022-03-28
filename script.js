// Create a function that chooses a random integer

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

// Create a function that randomly returns 'Rock' 'Paper' or 'Scissors'

function computerPlay() {
    // pick random number 1, 2 or 3
    const randomThrow = generateRandomInteger(3)
    // if 1, return rock
    if (randomThrow === 1) {
        return 'rock';
    // if 2, return paper
    } else if (randomThrow === 2) {
        return 'paper';
    // if 3, return scissors
    } else if (randomThrow === 3) {
        return 'scissors';
    }
}

//Create a function that plays a single round of Rock Paper Scissors. Return declaration of winner.

function playRound(playerSelection, computerSelection) {
    //set any user input to all lower case to match conditional statement.
    playerSelection = playerSelection.toLowerCase()
    
    //create variables with potential messages
    playerWins = `You Win! ${playerSelection} beats ${computerSelection}!`
    computerWins = `You Lose! ${computerSelection} beats ${playerSelection}!`
    tie = 'You Tied!'

    //if playerSelection and computerSelection are equal, return "You Tied."
    if (playerSelection === computerSelection) {
        console.log(tie);
        return 'tie'
    //playerWins options
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(playerWins);
        return 'player'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log(playerWins);
        return 'player'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(playerWins);
        return 'player'
    }
    console.log(computerWins)
    return 'computer'
}



function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerThrow = prompt('rock, paper, or scissors?: ');
        const computerThrow = computerPlay();

        const result = playRound(playerThrow, computerThrow);
        if (result === 'player') {
            playerScore++
        } else if (result === 'computer') {
            computerScore++
        }
    }
    console.log(`Player Score: ${playerScore}`)
    console.log(`Computer Score: ${computerScore}`)

    if (playerScore === computerScore) {
        return 'No Winner. Tie!'
    } else if (playerScore > computerScore) {
        return 'You win!'
    }
    return 'You Lose!'
    }


console.log(game())