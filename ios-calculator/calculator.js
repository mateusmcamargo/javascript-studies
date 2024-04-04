const numbers = document.querySelectorAll('.number');
const display = document.querySelector('#display span');

console.log(numbers.length);
let firstValue = "";
let isFirstValue = false;

let secondValue = "";
let isSecondValue = false;

let sign = "";
let resultValue = 0;

numbers.forEach(number => {
    number.addEventListener('click', function () {
        const numberText = this.textContent;
        // Atualize o conteúdo do display
        display.textContent += numberText;
    });
});

/*
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let attribute = e.target.getAttribute('innerText');
        if (isFirstValue === false) {
            getFirstValue(attribute);
        }
    });
}

function getFirstValue(el) {
    display.innerHTML = "";
    console.log(el);
    firstValue += el;
    display.innerHTML = firstValue;
    firstValue = +firstValue;
}
*/