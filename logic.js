const btns = document.querySelectorAll('button');
const resultContainer = document.querySelector('.results-container');
const resultMsg = document.querySelector('.result-msg');
const uScore = document.querySelector('.u-score');
const cScore = document.querySelector('.c-score');
resultMsg.textContent = "Let's play rock, paper, scissors!";

let userScore = 0;
let compScore = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', playRound);
});


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
        resultMsg.textContent = `Good job, ${userChoice} beats ${compChoice}`;
        updateScore(userScore += 1, compScore);
    } else if (userChoice === compChoice) {
        resultMsg.textContent = `It's a tie! ${compChoice} & ${userChoice}`;
    }else {
        resultMsg.textContent = `Bad luck, ${compChoice} beats ${userChoice}`;
        updateScore(userScore, compScore += 1);
    }
}


function updateScore(u,c) {
    uScore.textContent = u;
    cScore.textContent = c;
    if (u === 5 || c === 5) {
        if (u > c) {
            resultMsg.textContent = "Congrads, you win!";
        } else if (u < c) {
            resultMsg.textContent = "Sorry , you lose!";
        } else {
            resultMsg.textContent = "Nobody wins, it's a tie!";
        }
        btns.forEach((btn) => {
            btn.setAttribute('disabled', '');
        });
    } 
}