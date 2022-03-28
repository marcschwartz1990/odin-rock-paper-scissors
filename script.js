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

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

//function game()

//create playerScore variable and set value to 0
//create computerScore variable and set value to 0
//get player selection with prompt
//generate random computer selection
//play round
//if playerOne





//return winner or loser declaration