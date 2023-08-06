const btns = document.querySelectorAll('button');
const resultContainer = document.querySelector('.results-container');
const resultMsg = document.querySelector('.result-msg');
const score = document.querySelector('.score');
resultMsg.textContent = "Let see who'll win!";

let userScore = 0;
let compScore = 0;

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
        resultMsg.textContent = `Win! ${userChoice} beats ${compChoice}`;
        userScore++;
        console.log(userScore);
    } else if (userChoice === compChoice) {
        resultMsg.textContent = `It's a tie! ${compChoice} & ${userChoice}`;
    }else {
        resultMsg.textContent = `Lose! ${compChoice} beats ${userChoice}`;
        compScore++;
        console.log(compScore);
    }
}

// play game
function game() {

    // log result
    if (userScore + compScore === 5) {
        if (userScore > compScore) {
            console.log("You win!");
        } else if (userScore === compScore) {
            console.log("It's a tie!");
        } else {
            console.log("You lose!");
        }
    }

}

game();