const cell        = document.querySelectorAll('.cell');
const gameInfo    = document.getElementById('game-info');
const playerInfo  = document.getElementById('player-info');

const pointsInfo1 = document.getElementById('points-info-1');
const pointsInfo2 = document.getElementById('points-info-2');

const reset       = document.getElementById('reset');

playerInfo.classList.add('player-1');
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


//run throug the 'cell' array
for (let i = 0; i < cell.length; i ++) {
    
    cell[i].addEventListener('click', () => {

        //check if players can play the game
        if (canPlay === true) {
            
            //check wich one is playing
            if (flag === true) {
                    cell[i].classList.remove('player-2');
                    cell[i].classList.add('player-1');
                    cell[i].innerHTML = 'x';

                    playerInfo.classList.remove('player-1');
                    playerInfo.classList.add('player-2');
                    playerInfo.innerText = '2';

                    player1.push(i);
                    flag = false;
            } else {
                    cell[i].classList.remove('player-1');
                    cell[i].classList.add('player-2');
                    cell[i].innerHTML = 'o';

                    playerInfo.classList.remove('player-2');
                    playerInfo.classList.add('player-1');
                    playerInfo.innerText = '1';

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

        //check if all cell in the combination belong to 'player1'
        if (player1.includes(a) &&
            player1.includes(b) &&
            player1.includes(c)) {
            player1Points ++;
            console.log('\x1b[36mplayer1 wins\x1b[0m');
            console.log('points1: ' + player1Points);
            pointsInfo1.innerText = player1Points;
            canPlay = false;
            //add more logic (display message, add classes on css, end the game...)
            
            //display winner
            playerInfo.classList.remove('player-2');
            playerInfo.classList.add('player-1');
            playerInfo.innerText = '1';
            
            //gameInfo.innerHTML = "player <span class='player-1'>1</span> wins!";

            return;
        }

        //check if all cell in the combination belong to 'player2'
        if (player2.includes(a) &&
            player2.includes(b) &&
            player2.includes(c)) {
            player2Points ++;
            console.log('\x1b[35mplayer2 wins\x1b[0m');
            console.log('points2: ' + player2Points);
            pointsInfo2.innerText = player2Points;
            canPlay = false;
            //add more logic (display message, add classes on css, end the game...)

            //display winner
            playerInfo.classList.remove('player-1');
            playerInfo.classList.add('player-2');
            playerInfo.innerText = '2';
            
            //gameInfo.innerHTML = "player <span class='player-2'>2</span> wins!";
            return;
        }
    }

    console.log('\x1b[33mno winner yet o.o\x1b[0m');
}

//reset game
reset.addEventListener('click', () => {
    player1 = [];
    player2 = [];
    
    for (let i = 0; i < cell.length; i ++) {
        cell[i].innerHTML = "";
    }
    canPlay = true;

    //reset innerHTML
    //gameInfo.innerHTML = "player <span class='player-1'>1</span> turn"

    //player 1 turn
    flag = true;
});
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