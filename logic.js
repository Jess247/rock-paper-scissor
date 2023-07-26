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

// console.log(playRound(userChoice, compChoice));

function game() {
    let counter = 0;
    let currentResult;
    let userScore = 0;
    let compScore = 0;

    while(counter < 5) {
        const userChoice = prompt("Choose Rock, Paper or Scissor: ").toLowerCase();
        const compChoice = getComputerChoice();
        
        currentResult = playRound(userChoice, compChoice);
        console.log(currentResult);
        if (currentResult.includes("Win")) {
            userScore++;
        } else if (currentResult.includes("Lose")){
            compScore++;
        }
        ++counter;
    }
    if (userScore > compScore) {
        console.log("You win!");
    } else if (userScore === compScore) {
        console.log("It's a tie!");
    } else {
        console.log("You lose!");
    }

}

game();