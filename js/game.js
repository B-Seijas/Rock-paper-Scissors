const gameValues =["rock", "paper", "scissors"];
let playerSelection;
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    return gameValues[~~(Math.random() * gameValues.length)];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay()
    playerSelection = "rock"
    if ( playerSelection == computerSelection) {
        return "It´s a tie"
    }
    else if ((computerSelection == "rock" && playerSelection == "scissors" ) ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")) {
        computerScore++
        return ("You lost." + " " + computerSelection + " beats " + playerSelection) 
        
    } else  {
        playerScore++
        return ("You win. " + playerSelection + " beats " + computerSelection)
    }

}

function game() {
        playRound()
        console.log( "Player " + playerScore + " Computer " + computerScore)
        playRound()
        console.log( "Player " + playerScore + " Computer " + computerScore)
        playRound()
        console.log( "Player " + playerScore + " Computer " + computerScore)
        playRound()
        console.log( "Player " + playerScore + " Computer " + computerScore)
         playRound()
        console.log( "Player " + playerScore + " Computer " + computerScore)
    computerScore = 0;
    playerScore = 0;
}