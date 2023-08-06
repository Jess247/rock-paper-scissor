const btns = document.querySelectorAll("button");

btns.forEach(btn => {
    btn.addEventListener('click', playRound);
});

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
            choice = "scissors";
            break;
    }
    return choice;
}

function playRound(e) {
    const compChoice = getComputerChoice();
    const userChoice = this.id;

    if (userChoice === "rock" && compChoice === "scissors" ||
        userChoice === "paper" && compChoice === "rock" ||
        userChoice === "scissors" && compChoice === "paper") {
        console.log( `Win! ${userChoice} beats ${compChoice}`);
    } else if (userChoice === compChoice) {
        console.log( `It's a tie! ${compChoice} & ${userChoice}`);
    }else {
        console.log( `Lose! ${compChoice} beats ${userChoice}`);
    }
}

// play game
function game() {
    let counter = 0;
    let currentResult;
    let userScore = 0;
    let compScore = 0;

    // play game rounds
    // get round result and output
    currentResult = playRound(userChoice, compChoice);
    console.log(currentResult);
    // increse score
    if (currentResult.includes("Win")) {
        userScore++;
    } else if (currentResult.includes("Lose")){
        compScore++;
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

//game();