// Define rock, paper & scissors
rock = 'Rock' ;
paper = 'Paper';
scissors = "Scissors";

// Choose player selection
let playerSelection = prompt('What do you choose? (rock, paper or scissors)');
playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
console.log('You: ' + playerSelection);

// Get the computers choice randomly
function getComputerChoice(rock, paper, scissors) {
    const choices = [rock, paper, scissors];
    return choices[Math.floor((Math.random()*choices.length))];
}

// Give computer choice to computerSelection
const computerSelection = getComputerChoice(rock, paper, scissors);
console.log('Computer: ' + computerSelection);

// Play round logic (Rock > Scissors > Paper > Rock)
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Rock') {
        if (computerSelection == 'Scissors')
            return 'You win! ' + playerSelection + ' beats ' + computerSelection
        else if (computerSelection == 'Paper')
            return 'You lose... ' + computerSelection + ' beats ' + playerSelection
        else
            return 'Tie game!'
    }
    else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock')
            return 'You win! ' + playerSelection + ' beats ' + computerSelection
        else if (computerSelection == 'Scissors')
            return 'You lose... ' + computerSelection + ' beats ' + playerSelection
        else
            return 'Tie game!'
    }
    else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Paper')
            return 'You win! ' + playerSelection + ' beats ' + computerSelection
        else if (computerSelection == 'Rock')
            return 'You lose... ' + computerSelection + ' beats ' + playerSelection
        else
            return 'Tie game!'
    }
    else
        return alert('Invalid input! Please choose between rock, paper or scissors.')
}
console.log(playRound(playerSelection, computerSelection))
