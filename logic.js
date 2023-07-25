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
    console.log(randNum);
    switch (randNum) {
        case 1:
            choice = "Rock";
            break;

        case 2: 
            choice = "Paper";
            break;

        case 3:
            choice = "Scissor";
            break;
    }
    return choice;
}

console.log(getComputerChoice());