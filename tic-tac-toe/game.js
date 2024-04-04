const cells = document.querySelectorAll('.cell');
const player = document.getElementById('player-info');

player.classList.add('player-1');
let flag = false;

if (flag === false) {
    player.classList.remove('player-2');
    player.classList.add('player-1');
    player.innerText = '1';
}

for (let i = 0; i < cells.length; i ++) {

    cells[i].addEventListener('click', () => {
        if (flag === false) {
            cells[i].classList.remove('player-2');
            cells[i].classList.add('player-1');
            cells[i].innerHTML = 'x';

            player.classList.remove('player-2');
            player.classList.add('player-1');
            player.innerText = '1';

            flag = true;
        } else {
            cells[i].classList.remove('player-1');
            cells[i].classList.add('player-2');
            cells[i].innerHTML = 'o';

            player.classList.remove('player-1');
            player.classList.add('player-2');
            player.innerText = '2';

            flag = false;
        }
    });
}

function readyPlayerOne() {}
function readyPlayerTwo() {}