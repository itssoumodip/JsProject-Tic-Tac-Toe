const oplayer = document.querySelector('#oplayer');
const xplayer = document.querySelector('#xplayer');
const headerContainer = document.getElementById('header');
const titleHeader = document.querySelector('#titleHeader');
const aloneUser = document.getElementById('alone');
const multiUser = document.getElementById('multi');
const board = document.getElementById('board');
const restratBtn = document.querySelector('#restratBtn');

let gameStart = false;
let gamePause = false;
let playerChoice = null;

header.style.display = "none";
board.style.display = "none";
restartBtn.style.display = "none";

function userChoice (choice) {
    playerChoice = choice;
    document.querySelector('.choice').style.display = "none";
    document.getElementById('header').style.display = "flex";
        
    console.log(playerChoice);
} 
