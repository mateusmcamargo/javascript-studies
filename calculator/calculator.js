//get elements by IDs or classes
const body       = document.querySelector('body');
const calculator = document.getElementById('calculator');
const btnTheme   = document.getElementById('switch');

const display = document.getElementById('display');
const displayInput = document.getElementById('display-input');

const btnPlus   = document.querySelector(".plus");
const btnEquals = document.querySelector(".equals");

//change themes
btnTheme.addEventListener('change', (e) => {
    if (e.target.checked === true) {
        body.classList.add("theme-light");
    } else {
        body.classList.remove("theme-light");
    }
});

function addDisplay(input) {
    displayInput.value += input;
}

function subDisplay() {
    displayInput.innerHTML = displayInput.innerHTML.substring(0, displayInput.innerHTML.length -1);
}

function clearDisplay() {
    displayInput.value = "";
}

/*
function add(a, b) {return(a + b);}

btnPlus.addEventListener('click', () => {
    let currentInput = parseFloat(displayInput.value);
    let operator = '+';

    // Verifique se já existe um operador no visor
    if (displayInput.value.includes(operator)) {
        // Extraia o segundo número após o operador
        let secondNumber = parseFloat(displayInput.value.split(operator)[1]);
        // Calcule a soma
        let result = add(currentInput, secondNumber);
        // Atualize o visor com o resultado
        displayInput.value = result;
    } else {
        // Se não houver operador, apenas adicione o operador ao visor
        displayInput.value += operator;
    }
});


/*

function equals() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}*/