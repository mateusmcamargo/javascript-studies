const cell          = document.querySelectorAll('.cell');
const gameInfo      = document.getElementById('game-info');
const playerInfo    = document.getElementById('player-info');

const pointsInfo1   = document.getElementById('points-info-1');
const pointsInfo2   = document.getElementById('points-info-2');
const pointsInfoTie = document.getElementById('points-info-tie');

const reset         = document.getElementById('reset');

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
let tiePoints     = 0;

let canPlay  = true;
let flag     = true;
let numPlays = 0;


//run throug the 'cell' array
for (let i = 0; i < cell.length; i ++) {
    
    cell[i].addEventListener('click', () => {
        numPlays ++;

        //check if players can play the game
        if (canPlay === true) {
            
            //check wich one is playing
            if (flag === true) {
                    cell[i].classList.remove('player-2');
                    cell[i].classList.add('player-1');
                    cell[i].innerHTML = 'x';

                    gameInfo.innerHTML = "player <span class='player-2'>2</span> turn"

                    player1.push(i);
                    flag = false;
            } else {
                    cell[i].classList.remove('player-1');
                    cell[i].classList.add('player-2');
                    cell[i].innerHTML = 'o';

                    gameInfo.innerHTML = "player <span class='player-1'>1</span> turn"

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
            pointsInfo1.innerText = player1Points;
            canPlay = false;
            //add more logic (display message, add classes on css, end the game...)
            
            //display winner
            gameInfo.innerHTML = "player <span id='player-info' class='player-1'>1</span> wins!";

            return;
        }

        //check if all cell in the combination belong to 'player2'
        if (player2.includes(a) &&
            player2.includes(b) &&
            player2.includes(c)) {
            player2Points ++;
            pointsInfo2.innerText = player2Points;
            canPlay = false;
            //add more logic (display message, add classes on css, end the game...)

            //display winner
            gameInfo.innerHTML = "player <span class='player-2'>2</span> wins!";
            return;
        }

        if (numPlays >= 9) {
            tiePoints ++;
            pointsInfoTie.innerText = tiePoints;
            canPlay = false;
            
            //display tie
            gameInfo.innerHTML = "<span class='tie'>tie</span>!";
            return;
        }
    }
}

//reset game
reset.addEventListener('click', () => {
    
    //reset game
    for (let i = 0; i < cell.length; i ++) {cell[i].innerHTML = ""}
    player1  = [];
    player2  = [];
    canPlay  = true;
    flag     = true;
    numPlays = 0;
    
    //reset innerHTML
    gameInfo.innerHTML = "player <span class='player-1'>1</span> turn";
});