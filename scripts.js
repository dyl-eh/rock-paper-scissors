// Define rock, paper & scissors
const rock = 'Rock' ;
const paper = 'Paper';
const scissors = "Scissors";

// Define player selection and computer selection
let playerSelection = null;
let computerSelection = null;

// Define scores
let playerScore = 0;
let computerScore = 0;

// Get the computers choice randomly
function getComputerChoice(rock, paper, scissors) {
    const choices = [rock, paper, scissors];
    return choices[Math.floor((Math.random()*choices.length))];
}

// Get player choice
function getPlayerChoice() {
    let choice = prompt('What do you choose? (Rock, Paper or Scissors)');
    choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();
    return choice
}

// Keep score
let result = null;
function keepScore() {
    if (result === 'win') {
        playerScore++
    }
    else if (result === 'lose') {
        computerScore++
    }
    else {
        result = null;
    }
    result = null;
}

// Invalid input function
let invalidChoice = false
function invalidInput() {
    if (invalidChoice === true) {
        console.log('Playing new round.');
        console.log('----------------------------------');
        invalidChoice = false;
        playRound(playerSelection, computerSelection);
    }
}

// Play round logic (Rock > Scissors > Paper > Rock) and keep score
function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice(rock, paper, scissors);
    console.log(`You picked: ${playerSelection}`);
    console.log(`Computer picked: ${computerSelection}`);
    if (playerSelection === computerSelection) {
         return console.log('Round tie!');
    }
    else if (
        playerSelection === 'Rock' && computerSelection === 'Scissors' ||
        playerSelection === 'Paper' && computerSelection === 'Rock' ||
        playerSelection === 'Scissors' && computerSelection === 'Paper'
    ) {
        result = 'win';
        return console.log(`Round won! ${playerSelection} beats ${computerSelection}`);
    }
    else if (
        computerSelection === 'Rock' && playerSelection === 'Scissors' ||
        computerSelection === 'Paper' && playerSelection === 'Rock' ||
        computerSelection === 'Scissors' && playerSelection === 'Paper'
    ) {
        result = 'lose';
        return console.log(`Round lost! ${computerSelection} beats ${playerSelection}`);
    }
    else {
        invalidChoice = true;
        alert(`${playerSelection} is not a valid input. Please choose between Rock, Paper or Scissors.`);
        console.log(`${playerSelection} is not a valid input. Please choose between Rock, Paper or Scissors.`);
        console.log('----------------------------------');
        invalidInput();
    }
}

// Loop playRound 5 times and determine the winner
function playGame() {
    for (let rounds = 0; rounds < 5; rounds++) {
        playRound(playerSelection, computerSelection);
        keepScore()
        console.log(`Your score: ${playerScore} | Computer score: ${computerScore}`);
        console.log('----------------------------------');
    }
    pickWinner()
}

// Determine winner
function pickWinner() {
    if (playerScore > computerScore) {
        return console.log(`You won!!! Your score: ${playerScore} | Computer score: ${computerScore}`);
    }
    else if (computerScore > playerScore) {
        return console.log(`You lost... Computer score: ${computerScore} | Your score: ${playerScore}`);
    }
    else if (playerScore === computerScore) {
        return console.log(`Tie game! Your score: ${playerScore} | Computer score ${computerScore}`);
    }
}

playGame();