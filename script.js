const oplayer = document.querySelector('#oplayer');
const xplayer = document.querySelector('#xplayer');
const headerContainer = document.getElementById('header');
const titleHeader = document.querySelector('#titleHeader');
const aloneUser = document.getElementById('alone');
const multiUser = document.getElementById('multi');
const board = document.getElementById('board');
const restratBtn = document.querySelector('#restratBtn');
const cells = document.querySelectorAll('.cell');

// console.log(cells)

let gameStart = false;
let gamePaused = false;
let playerChoice = null;
let currentPlayer = null;
let gameBoard = Array(9).fill('');
const winnigConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

header.style.display = "none";
board.style.display = "none";
restartBtn.style.display = "none"; 

function userChoice (choice) {
    playerChoice = choice;
    document.querySelector('.choice').style.display = "none";
    document.getElementById('header').style.display = "flex";
    if (playerChoice=='multi') 
        withSomeone();   
    // console.log(playerChoice);
} 
xplayer.addEventListener("click", () => selectPlayer('X'));
oplayer.addEventListener("click", () => selectPlayer('O'));

function selectPlayer(player) {
    currentPlayer = player;
    // console.log(currentPlayer)
    document.getElementById('header').style.display = "none";
    board.style.display = "grid";  
    // restartBtn.style.display = "block"; 
}

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => handleClick(cell, index));
});

function handleClick (cell, index) {
    console.log(index)
    if (cell.textContent === "" && !gamePaused) {
        // console.log(index)
        gameStart = true;
        updateCell(cell, index);
        if (!checkWinner()) {
            switchPlayer();

        }
    }
}

function updateCell (cell, index) {

    console.log(currentPlayer)
    cell.textContent = currentPlayer; 
    gameBoard[index] = currentPlayer;
    cell.style.color = currentPlayer ==='X' ? '#00e1ff' : '#ff0000';
}

function switchPlayer () {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function withSomeone() {
    // console.log("wi")
}

function checkWinner() { 
    for(const [a, b, c] of winnigConditions) {
        // console.log(a, b, c)
        // console.log(currentPlayer)
        // console.log(gameBoard)
        if (gameBoard[a] == currentPlayer && gameBoard[b] == currentPlayer && gameBoard[c] == currentPlayer) {
            declareWinner([a, b, c]);
            return true;
        }
    }
    if (gameBoard.every(cell => cell!='')) {
        declareDraw();
        return true;
    }
    return false;
}

function declareWinner (winningIndexes) {
    console.log("his")
    gamePaused = true;
    winningIndexes.forEach(index => cells[index].style.background = "#edff8e");
    restartBtn.style.display = "block";
}
function declareDraw () {

}