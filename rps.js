const choices = ["rock","paper","scissors"];
let compChoice;

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

function selectWeapon (e) {
    e.addEventListener('click',console.log(e.id))
}

weapons.forEach(selectWeapon);



function playRound(playerSelection, computerSelection) {
    let victory;
    let draw;
    switch (true) {
        case (playerSelection.toLowerCase() === computerSelection):
            draw = true;
            break;r
        case (playerSelection.toLowerCase() === "rock"):    
            computerSelection === "scissors" ? victory = true : victory = false;
            break;
        case (playerSelection.toLowerCase() === "paper"):    
            computerSelection === "rock" ? victory = true : victory = false;
            break;
        case (playerSelection.toLowerCase() === "scissors"):    
            computerSelection === "paper" ? victory = true : victory = false;
            break;
    }
    if (draw) return null;
    if (victory) return true;
    return false;
  }

  function game(){
    let playerScore = 0;
    let compScore = 0;
    let roundResult;
    for (let i=1; i<=5; i++) {
      var playerChoice = prompt("Pick rock, paper, or scissors!");
      // currently does not check if user enters a random string
      computerPlay();
      roundResult = playRound(playerChoice, compChoice); 
      // determine round result
      if (roundResult) {
            console.log(`Round ${i}: You chose ${playerChoice.toLowerCase()}, computer chose ${compChoice}. You won this round!`);
            playerScore++;
      } else if (roundResult === false){
            console.log(`Round ${i}: You chose ${playerChoice.toLowerCase()}, computer chose ${compChoice}. You lost this round!`);
            compScore++;
      } else {
            console.log(`Round ${i}: You chose ${playerChoice.toLowerCase()}, computer chose ${compChoice}. It's a draw!`);
      }
      console.log(`Score: ${playerScore} pts (player) | ${compScore} pts (computer)`);
    }
    // determine game result
    if (playerScore > compScore) {
        return console.log("You won the game!");
    } else if (playerScore < compScore) {
        return console.log("Aww, you lost!");
    } else {
        return console.log("Neither wins!");
    }
}