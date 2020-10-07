//computer makes a random choice
function computerPlay() {
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        return "ROCK"
    } else if (rand === 1) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}

//score tracker
let playerScore = 0;
let computerScore = 0;

//decides the winner aka whoever gets 5pts first
function declareWinner(playerScore, computerScore) {
    if (playerScore == 5) {
        alert("You won the game!!");
    } else if (computerScore == 5) {
        alert("Sorry! You lost. :(")
    }
}

//runs through the game once
function playGame(playerSelection, computerSelection) {
    if (playerSelection == "ROCK" && computerSelection == "PAPER" || playerSelection == "PAPER" && computerSelection == 
            "SCISSORS" || playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        cScore();
        let result = document.querySelector("#results");
        results.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if (playerSelection == computerSelection) {
        let result = document.querySelector("#results");
        results.textContent = `You both played ${playerSelection}. It's a tie!`
    } else {
        pScore();
        let result = document.querySelector("#results");
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}!`
    } return result;
};

//pressing rock button
const rocks = document.querySelector("#ROCK");
rocks.addEventListener('click', () => {
    playGame("ROCK", computerPlay())
});

//pressing paper button
const papers = document.querySelector("#PAPER");
papers.addEventListener('click', () => {
    playGame("PAPER", computerPlay())
});

//pressing scissors button
const scissors = document.querySelector("#SCISSORS");
scissors.addEventListener('click', () => {
    playGame("SCISSORS", computerPlay())
});

//updates player score
function pScore() {
    playerScore++
    let pScore = document.querySelector("#playerScore");
    pScore.textContent = `${playerScore}`;
    declareWinner(playerScore,computerScore);
}

//updates computer score
function cScore() {
    computerScore++
    let cScore = document.querySelector("#computerScore");
    cScore.textContent = `${computerScore}`;
    declareWinner(playerScore,computerScore);
}

//reset game button
const reset = document.querySelector("#playAgain");
reset.addEventListener('click', resetGame);

//resets score count and updates
function resetGame() {
    let pScoreEnd = document.querySelector("#playerScore");
    pScoreEnd.textContent = 0;
    playerScore = 0;
    let cScoreEnd = document.querySelector("#computerScore");
    cScoreEnd.textContent = 0;
    computerScore = 0;
    let resetResult = document.querySelector("#results");
    resetResult.textContent = ``;
}