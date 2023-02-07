import { getRandomIntInclusive } from "../helper.js";
let pl1Name = prompt("Enter name for Player 1");
let pl2Name = prompt("Enter name for Player 2");
let pl1Score = 0;
let pl2Score = 0;

let d_pl1Name = document.getElementById("playerOneName");
let d_pl2Name = document.getElementById("playerTwoName");
let d_pl1Button = document.getElementById("playerOneButton");
let d_pl2Button = document.getElementById("playerTwoButton");
let d_pl1Score = document.getElementById("playerOneScore");
let d_pl2Score = document.getElementById("playerTwoScore");
let d_gameResult = document.getElementById("gameResult");

d_pl1Button.addEventListener("click", () => {
    pl1Score = rollDice();
    d_pl1Score.innerHTML = pl1Score;
    d_pl1Button.disabled = true;
    checkState();
})
d_pl2Button.addEventListener("click", () => {
    pl2Score = rollDice();
    d_pl2Score.innerHTML = pl2Score;
    d_pl2Button.disabled = true;
    checkState();
})


updateNames();

function checkState(){
    if (pl1Score != 0 && pl2Score != 0){
        if (pl1Score > pl2Score){
            announceWinner(pl1Name);
        }
        else if (pl1Score < pl2Score){
            announceWinner(pl2Name);
        }
        else{
            announceWinner(null);
        }
    }
}

function announceWinner(winner){
    if (winner != null){
        d_gameResult.innerHTML = `Congratulations ${winner}, a winner is you!`
    }
    else {
        d_gameResult.innerHTML = "We all lost."
    }
}

function updateNames(){
    d_pl1Name.innerHTML = pl1Name;
    d_pl2Name.innerHTML = pl2Name;
}

function rollDice(){
    return getRandomIntInclusive(1,6) + getRandomIntInclusive(1,6);
}
