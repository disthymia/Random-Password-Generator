const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOneEl = document.getElementById("pass-one-el")
let passTwoEl = document.getElementById("pass-two-el")
let passwordRequested = false
let passOne = ""
let passTwo = ""
let passwordLength = 13

function generateCharacters() {
    let randomCharacter = Math.floor(Math.random()*characters.length)
    return characters[randomCharacter]
}

function generatePasswords() {
    passwordRequested = true
    renderPassword()
}

function renderPassword() {
    passOneEl.textContent = ""
    passTwoEl.textContent = ""
    for (let i=0; i<passwordLength; i++) {
        passOneEl.textContent += generateCharacters()
        passTwoEl.textContent += generateCharacters()
    }
}

/* let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")
let passwordLength = 13

function generateCharacter() {
    let randomCharOne = Math.floor(Math.random() * characters.length)
    let randomCharTwo = Math.floor(Math.random() * characters.length)
    return characters[randomCharOne]
}

function generatePassOne() {
    let randomPasswordOne = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordOne += generateCharacter()         
    }
    passOne.textContent = randomPasswordOne
    return randomPasswordOne
}

function generatePassTwo() {
    let randomPasswordTwo = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordTwo += generateCharacter()         
    }
    passTwo.textContent = randomPasswordTwo
    return randomPasswordTwo
}

const genPassOne = generatePassOne()
const genPassTwo = generatePassTwo() */