let counterDiv = document.getElementById('counter-div');
let counterBtn = document.getElementById('counter-btn');
let c = 0;

const divColorOld = '#912BBC';
const divColorNew = '#E9A89B';

counterBtn.addEventListener("click", () => {
    c ++;
    counterDiv.innerHTML =
    `<p style="text-align: center; color: ${divColorOld};">
        you clicked me
        <br>
        <span style="color: ${divColorNew}">${c}</span>
        times
    </p>`;

    setTimeout(() => {
    `<p style="text-align: center; color: ${divColorOld};">
        you clicked me
        <br>
        <span style="color: ${divColorOld}">${c}</span>
        times
    </p>`;
    }, 100);
});