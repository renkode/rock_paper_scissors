const choices = ["rock","paper","scissors"];
let playerScore = 0;
let compScore = 0;
let round = 0;

const log = document.querySelector(".battle-log");
log.textContent = "Select your weapon!";

const playerWeapons = document.querySelectorAll(".player-weapon");
const compWeapons = document.querySelectorAll(".comp-weapon");
const weapons = document.querySelectorAll(".player-weapon");
const playerPts = document.querySelector("#player-points");
const compPts = document.querySelector("#comp-points");

playerWeapons.forEach(weapon => {
    weapon.addEventListener('click', function (e) {
        let playerChoice;
        let choiceIndex = computerPlay();
        let compChoice = choices[choiceIndex];
        highlightCompChoice(choiceIndex);
        if (e.target.tagName === "BUTTON") playerChoice = e.target.id;
        if (e.target.tagName === "I") playerChoice = e.target.parentNode.id;
        playRound(outcome(playerChoice, compChoice), playerChoice, compChoice);
    })
});

function highlightCompChoice (choiceId) {
    compWeapons.forEach(weapon => {
        weapon.classList.remove("active");
    });
    compWeapons[choiceId].classList.add("active");
}

function computerPlay() {
    // generate random index
    let min = 0;
    let max = choices.length;
    let index = Math.floor(Math.random() * (max - min) + min);
    return index;
}

function outcome(playerSelection, computerSelection) {
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

function playRound(result, playerChoice, compChoice) {
    if (result) {
        log.textContent = `Round ${round}: ${playerChoice} vs. ${compChoice}.
        You won this round!`;
        playerScore++;
  } else if (result === false){
        log.textContent = `Round ${round}: ${playerChoice} vs. ${compChoice}.
        You lost this round!`;
        compScore++;
  } else {
        log.textContent = `Round ${round}: ${playerChoice} vs. ${compChoice}.
        It's a draw!`;
  }
  console.log(`Score: ${playerScore} pts (player) | ${compScore} pts (computer)`);
  round++;
  playerPts.textContent = `${playerScore} pts`;
  compPts.textContent = `${compScore} pts`;
}