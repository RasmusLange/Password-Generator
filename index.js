const charLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const charNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const charSpecial = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let firstPassword = document.querySelector("#firstPassword")
let secondPassword = document.querySelector("#secondPassword")

function copyToClipboard(input) {
    //navigator.clipboard.writeText(input.textContent)
    console.log(input.textContent)
}

function generatePassword(input, length) {
    let suggestedPassword = ""
    for (let i = 0; i < length; i++) {
        let randomCharacter = input[Math.floor( Math.random() * input.length )]
        suggestedPassword += randomCharacter
    }
    
    return suggestedPassword
}

function btnClick() {
    let awaitInput = []
    let pwLength = document.querySelector("#pwLength").value
    if (pwLength === "") {
        pwLength = 15
    }
    let allowNumbers = document.querySelector("#allowNumbers")
    let allowSpecial = document.querySelector("#allowSpecial")
    if(!allowNumbers.checked && !allowSpecial.checked) {
        let inputChar = awaitInput.concat(charLetters)
        firstPassword.textContent = generatePassword(inputChar, pwLength)
        secondPassword.textContent = generatePassword(inputChar, pwLength)
    } else if (!allowNumbers.checked && allowSpecial.checked) {
        let inputChar = awaitInput.concat(charLetters, charSpecial)
        firstPassword.textContent = generatePassword(inputChar, pwLength)
        secondPassword.textContent = generatePassword(inputChar, pwLength)
    } else if (allowNumbers.checked && !allowSpecial.checked) {
        let inputChar = awaitInput.concat(charLetters, charNumbers)
        firstPassword.textContent = generatePassword(inputChar, pwLength)
        secondPassword.textContent = generatePassword(inputChar, pwLength)
    } else {
        let inputChar = awaitInput.concat(charLetters, charNumbers, charSpecial)
        firstPassword.textContent = generatePassword(inputChar, pwLength)
        secondPassword.textContent = generatePassword(inputChar, pwLength)
    }   
}
