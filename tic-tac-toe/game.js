const cells = document.querySelectorAll('.cell');
const player = document.getElementById('player-info');

const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let player1 = [];
let player2 = [];

player.classList.add('player-1');
let flag = true;

//run throug the 'cells' array
for (let i = 0; i < cells.length; i ++) {

    cells[i].addEventListener('click', () => {
        if (flag === true) {
            cells[i].classList.remove('player-2');
            cells[i].classList.add('player-1');
            cells[i].innerHTML = 'x';

            player.classList.remove('player-1');
            player.classList.add('player-2');
            player.innerText = '2';

            player1.push(i);
            flag = false;
        } else {
            cells[i].classList.remove('player-1');
            cells[i].classList.add('player-2');
            cells[i].innerHTML = 'o';

            player.classList.remove('player-2');
            player.classList.add('player-1');
            player.innerText = '1';

            player2.push(i);
            flag = true;
        }
        checkWinner();
        //console.log('player1: ' + player1);
        //console.log('player2: ' + player2);
    });
}


function checkWinner() {
    for (const combination of combinations) {
        const [a, b, c] = combination;

        //check if all cells in the combination belong to 'player1'
        if (player1.includes(a) &&
            player1.includes(b) &&
            player1.includes(c)) {
            console.log('\x1b[36mplayer1 wins\x1b[0m');

            //add more logic (display message, add classes on css, end the game...)
            
            return;
        }

        //check if all cells in the combination belong to 'player2'
        if (player2.includes(a) &&
            player2.includes(b) &&
            player2.includes(c)) {
            console.log('\x1b[35mplayer2 wins\x1b[0m');

            //add more logic (display message, add classes on css, end the game...)

            return;
        }
    }

    console.log('\x1b[33mno winner yet o.o\x1b[0m');
}
/*
function checkWinner() {
    combinations.find((item) => {
        if (item.filter((i) => player1.includes(i).length === 3)) {
            console.log('player 1 won');
            return item;
        } else if (item.filter((i) => player2.includes(i).length === 3)) {
            console.log('player 2 won');
        }
        return;
    });
}
*/