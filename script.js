const btnEl = document.querySelector('#btnEl');
const copyEl = document.querySelector('.span');
const spanEl = document.querySelector('.pan')

btnEl.addEventListener('click', () => {
    copyEl.classList.add('spann')
    copyEl.classList.remove('span')
    copyEl.style.transition = '.6s'
    password(8)

})

function password(lenght) {
    let input = btnEl.nextElementSibling;
    const math = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    input.value = ''
    for(let i = 0; i < lenght; i++){
        const passcode = Math.floor(Math.random() * math.length);
        input.value += math.charAt(passcode)
        console.log(input.value);
        
    }
}

function copyText() {
    const input = btnEl.nextElementSibling
    navigator.clipboard.writeText(input.value).then(() => {
        console.log(input.value);
        getpassword()
        
    })
}
copyEl.addEventListener('click', () => {
    copyText()
    spanEl.setAttribute('id', 'span')
    spanEl.classList.remove('pan')
    setTimeout(() => {
        spanEl.classList.add('pan')
        spanEl.setAttribute('id', '')
    },2000)

})

function getpassword() {
    const passpin = JSON.parse(localStorage.getItem('password')) || [];
    console.log(passpin);

    localStorage.setItem('password', JSON.stringify(passpin))
}
