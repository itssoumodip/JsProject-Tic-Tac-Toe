const cells = document.querySelectorAll('.cell');
const restratBtn = document.querySelector('#restratBtn');
const oplayer = document.querySelector('#oplayer');
const xplayer = document.querySelector('#xplayer');
const titleHeader = document.querySelector('#titleHeader');

let currentPlayer = 'X'; 
function handleClick(e) {
    const id = Number(e.id);
    array[id] = currentPlayer;
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
