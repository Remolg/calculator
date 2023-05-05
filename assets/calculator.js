let yaz = document.querySelector('.sonuc')



for(let i = 0; i<=9; i++) {
    document.querySelector('#number' + i).addEventListener('click' , function() {
        yaz.value += this.innerText;
        
    })
}
    
document.querySelector('#division').addEventListener('click' , function() {
    yaz.value += this.innerText;});

document.querySelector('#multiplication').addEventListener('click' , function() {
    yaz.value += this.innerText;});

document.querySelector('#extraction').addEventListener('click' , function() {
    yaz.value += this.innerText;});

document.querySelector('#equal').addEventListener('click' , function() {
    yaz.value += this.innerText;});

document.querySelector('#ac').addEventListener('click', function() {
    yaz.value = ' '
})  