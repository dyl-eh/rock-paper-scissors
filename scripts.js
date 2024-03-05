// Define rock, paper & scissors
rock = 'Rock' ;
paper = 'Paper';
scissors = "Scissors";

// Define player selection and computer selection
let playerSelection = '';
const computerSelection = '';

// Define scores
let playerScore = 0;
let computerScore = 0;

// Get the computers choice randomly
function getComputerChoice(rock, paper, scissors) {
    const choices = [rock, paper, scissors];
    return choices[Math.floor((Math.random()*choices.length))];
}

// Play round logic (Rock > Scissors > Paper > Rock) and keep score
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('What do you choose? (rock, paper or scissors)');
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log('You: ' + playerSelection);
    computerSelection = getComputerChoice(rock, paper, scissors);
    console.log('Computer: ' + computerSelection);
    if (playerSelection == 'Rock') {
        if (computerSelection == 'Scissors')
            return playerScore++, 'Result: You win! ' + playerSelection + ' beats ' + computerSelection;
        else if (computerSelection == 'Paper')
            return computerScore++, 'Result: You lose... ' + computerSelection + ' beats ' + playerSelection;
        else
            return 'Result: Tie game!';
    }
    else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock')
            return playerScore++, 'Result: You win! ' + playerSelection + ' beats ' + computerSelection;
        else if (computerSelection == 'Scissors')
            return computerScore++, 'Result: You lose... ' + computerSelection + ' beats ' + playerSelection;
        else
            return 'Result: Tie game!';
    }
    else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Paper')
            return playerScore++, 'Result: You win! ' + playerSelection + ' beats ' + computerSelection;
        else if (computerSelection == 'Rock')
            return computerScore++, 'Result: You lose... ' + computerSelection + ' beats ' + playerSelection;
        else
            return 'Result: Tie game!';
    }
    else
        return alert('Invalid input! Please choose between rock, paper or scissors.');
}

// Loop playRound 5 times and determine the winner
function playGame() {
    for (let rounds = 0; rounds < 5; rounds++) {
        console.log(playRound(playerSelection, computerSelection));
        console.log('Your score: ' + playerScore);
        console.log('Computer score: ' + computerScore);
        console.log('----------------------------------')
    }
    if (playerScore > computerScore) {
        console.log('You win with a score of ' + playerScore + ' and the computer had: ' + computerScore);
    }
    else if (computerScore > playerScore) {
        console.log('You lose! ' + 'The computers score was ' + computerScore + ' and you had ' + playerScore);
    }
    else {
        console.log('Its a tie! With an equal score of ' + playerScore + ' to ' + computerScore);
    }
}

playGame();