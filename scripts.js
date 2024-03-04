Rock = 'Rock'
Paper = 'Paper'
Scissors = 'Scissors'

function getComputerChoice() {
    const choices = [Rock, Paper, Scissors]
    return choices[Math.floor((Math.random()*choices.length))];
}
console.log(getComputerChoice())
