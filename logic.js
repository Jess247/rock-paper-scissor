/*
generate random computer choice
prompt user to enter a choice
compare user choice and computer choice
    if user choice and computer are equal
        log it's a draw
    if user choice is rock and comp choice is scissor
       log user wins
    if user choice is paper and comp choice is rock
       log user wins
    if user choice is scissor and comp choice is paper
       log user wins
    else 
        log comp wins
*/

// generate random computer choice
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    let choice = null;
    switch (randNum) {
        case 1:
            choice = "rock";
            break;

        case 2: 
            choice = "paper";
            break;

        case 3:
            choice = "scissor";
            break;
    }
    return choice;
}


// prompt user to enter a choice
const userChoice = prompt("Choose Rock, Paper or Scissor: ").toLowerCase();
const compChoice = getComputerChoice();
console.log(`${userChoice} ${compChoice}`);

// play round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissor" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissor" && computerSelection === "paper") {
        return `Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        return "It's a tie";
    }else {
        return `Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

console.log(playRound(userChoice, compChoice));