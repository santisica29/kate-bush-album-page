const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const personalGreeting = document.querySelector('.personal-greeting');
const aListen = document.querySelector('.listen')
const aHerWebsite = document.querySelector('.her-website')

form.addEventListener('submit', (e) => e.preventDefault())

submitBtn.addEventListener('click', () => {
    localStorage.setItem('name', nameInput.value)
    nameDisplayCheck()
})

forgetBtn.addEventListener('click', () => {
    localStorage.removeItem('name')
    nameDisplayCheck()
})

function nameDisplayCheck() {
    if (localStorage.getItem('name')) {
        const name = localStorage.getItem('name')
        personalGreeting.innerHTML = `Welcome ${name} to the Kate Bush Website`
        aListen.innerHTML += ` ${name}`
        aHerWebsite.innerHTML = `Hey ${name} check her website`
        forgetDiv.style.display = 'block'
        rememberDiv.style.display = 'none'
    } else {
        personalGreeting.textContent = 'Welcome to the Kate Bush Website'
        aHerWebsite.textContent = 'Learn more about Kate at her official website'
        aListen.textContent = 'Listen to one of her songs'
        forgetDiv.style.display = 'none'
        rememberDiv.style.display = 'block'
    }
}

nameDisplayCheck()