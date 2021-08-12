const choices = ["rock","paper","scissors"];
let compChoice;
let choice;
let playerScore = 0;
let compScore = 0;
let round = 0;

function computerPlay() {
    // generate random index
    let min = 0;
    let max = choices.length;
    let index = Math.floor(Math.random() * (max - min) + min);
    compChoice = choices[index];
    return compChoice;
}

const log = document.querySelector(".battle-log");
log.textContent = "Select your weapon!";

const weapons = document.querySelectorAll(".weapon");
const playerPts = document.querySelector("#player-points");
const compPts = document.querySelector("#comp-points");

weapons.forEach(weapon => {
    weapon.addEventListener('click', function (e) {
        if (e.target.tagName === "BUTTON") choice = e.target.id;
        if (e.target.tagName === "I") choice = e.target.parentNode.id;
        game();
    })
});

function playRound(playerSelection, computerSelection) {
    let victory;
    let draw;
    switch (true) {
        case (playerSelection === computerSelection):
            draw = true;
            break;r
        case (playerSelection === "rock"):    
            computerSelection === "scissors" ? victory = true : victory = false;
            break;
        case (playerSelection === "paper"):    
            computerSelection === "rock" ? victory = true : victory = false;
            break;
        case (playerSelection === "scissors"):    
            computerSelection === "paper" ? victory = true : victory = false;
            break;
    }
    if (draw) return null;
    if (victory) return true;
    return false;
}

function game() {
    let roundResult;
    roundResult = playRound(choice, computerPlay());
    if (roundResult) {
        log.textContent = `Round ${round}: ${choice} > ${compChoice}.
        You won this round!`;
        playerScore++;
  } else if (roundResult === false){
        log.textContent = `Round ${round}: ${choice} < ${compChoice}.
        You lost this round!`;
        compScore++;
  } else {
        log.textContent = `Round ${round}: ${choice} = ${compChoice}.
        It's a draw!`;
  }
  console.log(`Score: ${playerScore} pts (player) | ${compScore} pts (computer)`);
  round++;
  playerPts.textContent = `${playerScore} pts`;
  compPts.textContent = `${compScore} pts`;
}