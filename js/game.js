const gameValues =["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
const computerScoreSpan = document.getElementById('computerScore')
const playerScoreSpan = document.getElementById('playerScore')
const scoreBoardDiv = document.querySelector('.scoreBoard')
const resultp = document.querySelector('.result > p')
const rockDiv = document.getElementById('rock')
const paperDiv = document.getElementById('paper')
const scissorsDiv = document.getElementById('scissors')

rockDiv.addEventListener('click', function () {
    playRound("Rock")
})

paperDiv.addEventListener('click', function () {
    playRound("Paper")
})

scissorsDiv.addEventListener('click', function () {
    playRound("Scissors")
})


function computerPlay() {
    return gameValues[~~(Math.random() * gameValues.length)];
}

function win(playerSelection, computerSelection) {
    playerScore++;
    playerScoreSpan.innerText = playerScore;
    resultp.innerText = `${playerSelection} beats ${computerSelection}. You win!!`
}

function lose(playerSelection, computerSelection) {
    computerScore++;
    computerScoreSpan.innerText = computerScore;
    resultp.innerText = `${playerSelection} loses to ${computerSelection}. You lost!`
}

function draw(playerSelection, computerSelection) {
    resultp.innerText = `${playerSelection} ties to ${computerSelection}. It's a draw`
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay() 
    if ( playerSelection == computerSelection) {
       draw(playerSelection, computerSelection)
    }
    else if ((computerSelection == "Rock" && playerSelection == "Scissors" ) ||
    (computerSelection == "Paper" && playerSelection == "Rock") ||
    (computerSelection == "Scissors" && playerSelection == "Paper")) {
        lose(playerSelection, computerSelection)
    } else  {
        win(playerSelection, computerSelection)
    }
    if (playerScore == 5) {
        resultp.innerText = `You won the game ${playerScore} to ${computerScore}.`
        playerScore = 0;
        computerScore = 0;
        computerScoreSpan.innerText = 0;
        playerScoreSpan.innerText = 0;
    }
    if (computerScore == 5) {
        resultp.innerText = `You lost the game ${computerScore} to ${playerScore}.`
        playerScore = 0;
        computerScore = 0;
        computerScoreSpan.innerText = 0;
        playerScoreSpan.innerText = 0;
    }
}
