const choices = ["rock","paper","scissors"];
let score = 0;

function computerPlay() {
    // generate random index
    let min = 0;
    let max = choices.length;
    let index = Math.floor(Math.random() * (max - min) + min);
    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    let victory;
    let draw;
    switch (true) {
        case (playerSelection.toLowerCase() === computerSelection):
            draw = true;
            break;
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
    if (draw) return console.log("It was a draw!");
    if (victory) return console.log("You win!");
    return console.log("You lose!");
  }
  
var playerSel = "ROCk";
var compSel = computerPlay();
console.log(`You chose ${playerSel.toLowerCase()}. Computer chose ${compSel}. 
${playRound(playerSel, compSel)}`);