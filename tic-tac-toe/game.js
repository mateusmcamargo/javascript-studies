const cells = document.querySelectorAll('.cell');
const player = document.getElementById('player-info');

const points1 = document.getElementById('points-info-1');
const points2 = document.getElementById('points-info-2');

player.classList.add('player-1');

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

let player1Points = 0;
let player2Points = 0;

let canPlay = true;
let flag = true;


//run throug the 'cells' array
for (let i = 0; i < cells.length; i ++) {
    
    cells[i].addEventListener('click', () => {

        //check if players can play the game
        if (canPlay === true) {
            
            /*
            check wich one is playing
            
            flag  = player1
            !flag = player2
            */
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
        }
    });
}

//check for winner
function checkWinner() {
    for (const combination of combinations) {
        const [a, b, c] = combination;

        //check if all cells in the combination belong to 'player1'
        if (player1.includes(a) &&
            player1.includes(b) &&
            player1.includes(c)) {
            player1Points ++;
            console.log('\x1b[36mplayer1 wins\x1b[0m');
            console.log('points1: ' + player1Points);
            points1.innerText = player1Points;
            canPlay = false;
            //add more logic (display message, add classes on css, end the game...)
            
            return;
        }

        //check if all cells in the combination belong to 'player2'
        if (player2.includes(a) &&
            player2.includes(b) &&
            player2.includes(c)) {
            player2Points ++;
            console.log('\x1b[35mplayer2 wins\x1b[0m');
            console.log('points2: ' + player2Points);
            points1.innerText = player1Points;
            canPlay = false;
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