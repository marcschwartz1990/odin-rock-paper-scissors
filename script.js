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
        return 'Rock';
    // if 2, return paper
    } else if (randomThrow === 2) {
        return 'Paper';
    // if 3, return scissors
    } else if (randomThrow === 3) {
        return 'Scissors';
    }
}

//Create a function that plays a single round of Rock Paper Scissors. Return declaration of winner.

function playRound(playerSelection, computerSelection) {
    //create variables with potential messages
    playerWins = `You Win! ${playerSelection} beats ${computerSelection}!`
    computerWins = `You Lose! ${computerSelection} beats ${playerSelection}!`
    tie = 'You Tied!'

    //if playerSelection and computerSelection are equal, return "You Tied."
    if (playerSelection === computerSelection) {
        return tie;
    //playerWins options
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return playerWins;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return playerWins;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return playerWins;
    }
    return computerWins
}






//return winner or loser declaration