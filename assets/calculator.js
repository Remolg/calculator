let yaz = document.querySelector('.sonuc')



for (let i = 0; i <= 9; i++) {
    document.querySelector('#number' + i).addEventListener('click', function () {
        yaz.value += this.innerText;

    })
}

const toplaBtn = document.querySelector('#plus');
const temizleBtn = document.querySelector('#ac');
const bolBtn = document.querySelector('#division');
const carpBtn = document.querySelector('#multiplication');
const eksiBtn = document.querySelector('#extraction');
const hesaplaBtn = document.querySelector('#equal');
const yuzdeBtn = document.querySelector('#percent');
const noktaBtn = document.querySelector('#point');

bolBtn.addEventListener('click', function () {
    yaz.value += this.innerText;
});

carpBtn.addEventListener('click', function () {
    yaz.value += this.innerText;
});

eksiBtn.addEventListener('click', function () {
    yaz.value += this.innerText;
});

toplaBtn.addEventListener('click', function () {
    yaz.value += this.innerText;
});

hesaplaBtn.addEventListener('click', function () {
    yaz.value += this.innerText;
});

yuzdeBtn.addEventListener('click', function () {
    yaz.value += this.innerText;
});

temizleBtn.addEventListener('click', function () {
    yaz.value = ' ';
});

noktaBtn.addEventListener('click', function () {
    yaz.value += this.innerText;
});
