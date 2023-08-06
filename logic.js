const btns = document.querySelectorAll('button');
const resultContainer = document.querySelector('.results-container');
const resultMsg = document.querySelector('.result-msg');
const uScore = document.querySelector('.u-score');
const cScore = document.querySelector('.c-score');
resultMsg.textContent = "Let see who'll win!";
let userScore = 0;
let compScore = 0;

btns.forEach((btn) => {
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
        resultMsg.textContent = `${userChoice} beats ${compChoice}`;
        updateScore(userScore += 1, compScore);
    } else if (userChoice === compChoice) {
        resultMsg.textContent = `It's a tie! ${compChoice} & ${userChoice}`;
    }else {
        resultMsg.textContent = `${compChoice} beats ${userChoice}`;
        updateScore(userScore, compScore += 1);
    }
}


function updateScore(u,c) {
    uScore.textContent = u;
    cScore.textContent = c;
    if ((u + c) === 5) {
        if (u > c) {
            resultMsg.textContent = "Congrads, you win!";
        } else if (u < c) {
            resultMsg.textContent = "Sorry,you lose!";
        } else {
            resultMsg.textContent = "Nobody wins, it's a tie!"
        }
    } 
}