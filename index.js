const hours   = document.getElementById('hours');
const minutes = document.getElementById('minutes');
/*
- temporizer function that updates the clock in real time using the 'Date' object to get current time from the computer system.
- the 'setInterval' function allows a repeating action in a set interval. It is used here to update the clock every second.
*/
const clock = setInterval(function time() {
    //get data
    let date = new Date();
    let hour = date.getHours();
    let min  = date.getMinutes();

    //add a '0' before the number if it is smaller than 10, just for identation
    if (hour < 10) {hour = '0' + hour}
    if (min  < 10) {min  = '0' + min}

    //applies the data to each HTML element
    hours.textContent = hour;
    minutes.textContent = min;
});

/*
miniatura da aplicação seguindo o mouse no evento mouseover do chart
*/