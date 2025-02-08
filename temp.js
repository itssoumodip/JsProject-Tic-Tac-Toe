/*
const cells = document.querySelectorAll('.cell');
const restratBtn = document.querySelector('#restratBtn');
const oplayer = document.querySelector('#oplayer');
const xplayer = document.querySelector('#xplayer');
const titleHeader = document.querySelector('#titleHeader');

let currentPlayer = 'X'; 

function checkWinner() {
    // if (
    //     (array[0] == array[1] && array[1] == [2]) || 
    //     (array[3] == array[4] && array[4] == [5]) || 
    //     (array[6] == array[7] && array[7] == [8]) || 
    //     (array[0] == array[3] && array[3] == [6]) || 
    //     (array[1] == array[4] && array[4] == [7]) || 
    //     (array[2] == array[5] && array[5] == [8]) || 
    //     (array[0] == array[4] && array[4] == [8]) || 
    //     (array[2] == array[4] && array[4] == [6]) ||  
    // )
    
}

function handleClick(e) {
    const id = Number(e.id);
    array[id] = currentPlayer;
    e.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    console.log(array);
}

// console.log(cells)
// console.log(restratBtn)
// console.log(oplayer)
// console.log(xplayer)
// console.log(titleHeader)

// let player = 'x';

let array = Array(9).fill(null);
console.log(array);

function choosePlayer(playerSelect) {
    console.log(playerSelect)
    let player = playerSelect;
    if (player=='X') {
        xplayer.classList.add('playerActive');
        oplayer.classList.remove('playerActive');
    }
    else {
        xplayer.classList.remove('playerActive');
        oplayer.classList.add('playerActive');
    }
}
*/
// const cells = document.querySelectorAll('.cell');
const oplayer = document.querySelector('#oplayer');
const xplayer = document.querySelector('#xplayer');
const headerContainer = document.getElementById('header');
const titleHeader = document.querySelector('#titleHeader');
const aloneUser = document.getElementById('alone');
const multiUser = document.getElementById('multi');
const board = document.getElementById('board');
const restratBtn = document.querySelector('#restratBtn');

let gameStart = false;

header.style.display = "none";
board.style.display = "none";
restartBtn.style.display = "none";

function userChoice (choice) {
    let playerChoice = choice;
    if (playerChoice==='alone') {
        multiUser.classList.remove('activeChoice');
        aloneUser.classList.add('activeChoice');
        alonePlaying();
    } else {
        aloneUser.classList.remove('activeChoice');
        multiUser.classList.add('activeChoice');
    }
        
    console.log(playerChoice);
}
function multiPlaying () {
} 
function alonePlaying () {
    header.style.display = "flex";
    // if (xplayer.addEventListener) {
    //     xplayer.classList.add('playerAc tive');
    //     oplayer.classList.remove('playerActive'); 
    // }
    // else {
    //     xplayer.classList.remove('playerActive');
    //     oplayer.classList.add('playerActive');
    // }
}
