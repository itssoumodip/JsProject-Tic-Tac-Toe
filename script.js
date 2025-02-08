const oplayer = document.querySelector('#oplayer');
const xplayer = document.querySelector('#xplayer');
const headerContainer = document.getElementById('header');
const titleHeader = document.querySelector('#titleHeader');
const aloneUser = document.getElementById('alone');
const multiUser = document.getElementById('multi');
const board = document.getElementById('board');
const restratBtn = document.querySelector('#restratBtn');
const cells = document.querySelectorAll('.cell');
const winnerMsg = document.getElementById('declareWinner');
const userPlayingChoice = document.querySelector('.choice');
const header = document.getElementById('header');
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
restartBtn.style.visibility = 'hidden';

function userChoice(choice) {
    playerChoice = choice;
    userPlayingChoice.style.display = "none";
    document.getElementById('header').style.display = "flex";
    if (playerChoice == 'multi')
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

function handleClick(cell, index) {
    // console.log(index)
    if (playerChoice == 'multi') {
        if (cell.textContent === "" && !gamePaused) {
            // console.log(index)
            gameStart = true;
            updateCell(cell, index);
            if (checkWinner())
                return;

            switchPlayer();
        }
    }
    else {
        if (cell.textContent === "" && !gamePaused) {
            gameStart = true;
            updateCell(cell, index);

            if (checkWinner())
                return;

            computerMove();
            switchPlayer();
        }
    }
}


function updateCell(cell, index) {

    console.log(cell)
    cell.textContent = currentPlayer;
    gameBoard[index] = currentPlayer;
    cell.style.color = currentPlayer === 'X' ? '#00e1ff' : '#ff0000';
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    for (const [a, b, c] of winnigConditions) {
        // console.log(a, b, c)
        // console.log(currentPlayer)
        // console.log(gameBoard)
        if (gameBoard[a] == currentPlayer && gameBoard[b] == currentPlayer && gameBoard[c] == currentPlayer) {
            declareWinner([a, b, c]);
            return true;
        }
    }
    if (gameBoard.every(cell => cell != '')) {
        declareDraw();
        return true;
    }
    return false;
}

function declareWinner(winningIndexes) {
    winnerMsg.textContent = `${currentPlayer} WINS !!`
    winnerMsg.style.display = "block";
    // console.log("his") 
    gamePaused = true;
    winningIndexes.forEach(index => cells[index].style.background = "#edff8e");
    restartBtn.style.visibility = 'visible';
}
function declareDraw() {
    winnerMsg.textContent = `IT'S A DRAW !!`;
    winnerMsg.style.display = "block";
    gamePaused = true;
    restartBtn.style.visibility = 'visible';
}

restartBtn.addEventListener("click", () => {
    restartBtn.style.visibility = 'hidden';
    board.style.display = 'none';
    winnerMsg.style.display = 'none';
    userPlayingChoice.style.display = "inline"

    gameBoard.fill('');
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.background = '';
    });
    gamePaused = false;
    gameStart = false;
})

function computerMove() {
    if (gameBoard.every(cell => cell !== '')) return;

    gamePaused = true;
    setTimeout(() => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * gameBoard.length);
        } while (gameBoard[randomIndex] !== '')

        updateCell(cells[randomIndex], randomIndex);
        if (checkWinner()) return;

        switchPlayer();
        gamePaused = false;
    }, 1000);
}
