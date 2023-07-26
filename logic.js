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

// play round
function playRound(playerSelection, computerSelection) {
    // determin round winner
    if (playerSelection === "rock" && computerSelection === "scissor" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissor" && computerSelection === "paper") {
        return `Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        return `It's a tie! ${computerSelection} & ${playerSelection}`;
    }else {
        return `Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// play game
function game() {
    let counter = 0;
    let currentResult;
    let userScore = 0;
    let compScore = 0;

    // play game rounds
    while(counter < 5) {
        // prompt user and get compchoice
        const userChoice = prompt("Choose Rock, Paper or Scissor: ").toLowerCase();
        const compChoice = getComputerChoice();
        
        // get round result and output
        currentResult = playRound(userChoice, compChoice);
        console.log(currentResult);
        // increse score
        if (currentResult.includes("Win")) {
            userScore++;
        } else if (currentResult.includes("Lose")){
            compScore++;
        }
        ++counter;
    }
    // log result
    if (userScore > compScore) {
        console.log("You win!");
    } else if (userScore === compScore) {
        console.log("It's a tie!");
    } else {
        console.log("You lose!");
    }

}

game();