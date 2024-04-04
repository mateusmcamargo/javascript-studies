const body    = document.querySelector('body');
const header  = document.querySelector('header');
const hours   = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const period  = document.querySelector('.period');
const theme   = document.getElementById('theme');


/*
- temporizer function that updates the clock in real time using the 'Date' object to get current time from the computer system.
- the 'setInterval' function allows a repeating action in a set interval. It is used here to update the clock every second.
*/
const clock = setInterval(function time() {
    //get data
    let date = new Date();
    let hour = date.getHours();
    let min  = date.getMinutes();
    let sec  = date.getSeconds();

    //change the 'period' innerTEXT based on the current hour
    if (hour > 12 && hour <= 24) {
        hour -= 12;
        period.innerText = 'pm';
    } else {
        hour = hour;
        period.innerText = 'am';
    }

    //add a '0' before the number if it is smaller than 10, just for identation
    if (hour < 10) {hour = '0' + hour}
    if (min  < 10) {min  = '0' + min}
    if (sec  < 10) {sec  = '0' + sec}

    //applies the data to each HTML element
    hours.textContent = hour;
    minutes.textContent = min;
    seconds.textContent = sec;

});

/*
- this function contains a switch statement for theme changes, adding and removing classes using the 'classList' poperty based on the value of a 'select' input.
*/
theme.addEventListener('change', (e) => {

    switch(e.target.value) {

        case 'dark':
            body.classList.remove('theme-neon');
            body.classList.remove('theme-light');
        break;

        case 'light':
            body.classList.add('theme-light');
            body.classList.remove('theme-neon');
        break;

        case 'neon':
            body.classList.add('theme-neon');
            body.classList.remove('theme-light');
        break;
    }
});

/*
- this function listens to a keypress of the 'space' key and changes the 'header' display as a if it was boolean value from 'none' to 'inherith' and vice-versa.
- 32 is the spacebar code in the ASCII table
*/
var hide = false;
document.addEventListener('keydown', function(e) {
    var key = e.keyCode || e.which || e.key;
    if (key == 32) {hide = !hide}

    switch(hide) {
        case false:
            header.style.display = 'inherit';
        break;

        case true:
            header.style.display = 'none';
        break;
    }
});