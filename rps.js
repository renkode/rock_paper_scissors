const choices = ["rock","paper","scissors"];

function computerPlay() {
    // generate random index
    let min = 0;
    let max = choices.length;
    let index = Math.floor(Math.random() * (max - min) + min);
    return choices[index];

}

console.log(computerPlay());