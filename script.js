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
        document.getElementById("results").innerHTML = tie;
        return 'tie'
    //playerWins options
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        document.getElementById("results").innerHTML = playerWins;
        return 'player'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        document.getElementById("results").innerHTML = playerWins;
        return 'player'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        document.getElementById("results").innerHTML = playerWins;
        return 'player'
    }
    document.getElementById("results").innerHTML = computerWins;
    return 'computer'
}

function displayScore(player, score) {
    document.getElementById(`${player}Score`).innerHTML = `${player}: ${score}`;
};


let playerScore = 0;
let computerScore = 0;

displayScore('player', playerScore)
displayScore('computer', computerScore)

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id)
        let result = playRound(button.id, computerPlay());
        if (result === 'player') {
            playerScore++
        } else if (result === 'computer') {
            computerScore++
        }
    
    displayScore('player', playerScore)
    displayScore('computer', computerScore)

    if (playerScore === 5) {
        displayScore('player', playerScore)
        displayScore('computer', computerScore)
        alert('Congratulations! You Win!')
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        displayScore('player', playerScore)
        displayScore('computer', computerScore)
        alert('You Lose! The computer beat you.')
        playerScore = 0;
        computerScore = 0;
    }
    });
    });

