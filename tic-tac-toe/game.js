//<div class="cell"></div>
const cell          = document.querySelectorAll('.cell');

//<h2 id="game-info">player <span id="player-info">1</span> turn</h2>
const gameInfo      = document.getElementById('game-info');
const playerInfo    = document.getElementById('player-info');

//<h3><span class="player-1"   id="points-info-1">0</span></h3>
//<h3><span class="player-2"   id="points-info-2">0</span></h3>
//<h3><span class="player-tie" id="points-info-tie">0</span></h3>
const pointsInfo1   = document.getElementById('points-info-1');
const pointsInfo2   = document.getElementById('points-info-2');
const pointsInfoTie = document.getElementById('points-info-tie');

//<button id="reset">reset</button>
const reset         = document.getElementById('reset');

//set player 1 as the first player
playerInfo.classList.add('player-1');

//define win combinations
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

//player-specific arrays
let player1 = [];
let player2 = [];

//players and ties points
let player1Points = 0;
let player2Points = 0;
let tiePoints     = 0;

//boolean variables
let canPlay  = true;
let flag     = true;

//number of moves
let numMoves = 0;
//run throug the 'cell' array
for (let i = 0; i < cell.length; i ++) {
    
    //event listener for cell mouseover (animation)
    cell[i].addEventListener('mouseover', () => {
        //check if players can make a move
        if (canPlay === true && cell[i].innerHTML === "") {
            //check wich one is playing
            if (flag === true) {
                //animation
                cell[i].classList.remove('animation-cell-player-2')
                cell[i].classList.add('animation-cell-player-1')
            } else {
                //animation
                cell[i].classList.remove('animation-cell-player-1')
                cell[i].classList.add('animation-cell-player-2')
            }
        }
    });
    
    //event listener for cell mouseout (animation)
    cell[i].addEventListener('mouseout', () => {
        //animation
        cell[i].classList.remove('animation-cell-player-2')
        cell[i].classList.remove('animation-cell-player-1')
        
    });

    //event listener for cell clicks (player move)
    cell[i].addEventListener('click', () => {
        
        //check if players can make a move
        if (canPlay === true && cell[i].innerHTML === "") {
            numMoves ++;
            cell[i].classList.remove('animation-cell-player-1');
            cell[i].classList.remove('animation-cell-player-2');
            
            //check wich one is playing
            if (flag === true) {
                //make the move
                cell[i].classList.remove('player-2');
                cell[i].classList.remove('animation-cell-player-2');
                cell[i].classList.add('player-1');
                cell[i].classList.add('animation-cell-player-1');
                cell[i].innerHTML = 'x';
                
                //update game info
                gameInfo.innerHTML = "player <span class='player-2'>2</span> turn"
                
                //add move to player array
                player1.push(i);
                
                //change player
                flag = false;
            } else {
                //make the move
                cell[i].classList.remove('player-1');
                cell[i].classList.remove('animation-cell-player-1');
                cell[i].classList.add('player-2');
                cell[i].classList.add('animation-cell-player-2');
                cell[i].innerHTML = 'o';

                //update game info
                gameInfo.innerHTML = "player <span class='player-1'>1</span> turn"
            
                //add move to player array
                player2.push(i);

                //change player
                flag = true;
            }

            checkWinner();
        }
    });
}

//check for winner
function checkWinner() {

    //iterate each element in the 'combinations' array
    for (const combination of combinations) {
        const [a, b, c] = combination;

        //check if all cell in the combination belong to 'player1'
        if (player1.includes(a) &&
            player1.includes(b) &&
            player1.includes(c)) {
            //add point
            player1Points ++;
            pointsInfo1.innerText = player1Points;

            //end game
            canPlay = false;
            
            //display winner
            gameInfo.innerHTML = "<span id='player-info' class='player-1'>player 1 wins!</span>";
            return;
        }
        
        //check if all cell in the combination belong to 'player2'
        if (player2.includes(a) &&
        player2.includes(b) &&
        player2.includes(c)) {
            //add point
            player2Points ++;
            pointsInfo2.innerText = player2Points;
            
            //end game
            canPlay = false;
            
            //display winner
            gameInfo.innerHTML = "<span id='player-info' class='player-2'>player 2 wins!</span>";
            return;
        }

        //check for a tie
        if (numMoves >= 9) {
            //add point
            tiePoints ++;
            pointsInfoTie.innerText = tiePoints;
            
            //end game
            canPlay = false;

            //display tie
            gameInfo.innerHTML = "<span class='tie'>tie!</span>";
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
    numMoves = 0;
    
    //reset innerHTML
    gameInfo.innerHTML = "player <span class='player-1'>1</span> turn";
});