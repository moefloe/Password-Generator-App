
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]
const pwdField1 = document.getElementById("password-el1")
const pwdField2 = document.getElementById("password-el2")
const generateBtn = document.getElementById("generate-btn")
const copyIcon1 = document.getElementById("save-icon1")
const copyIcon2 = document.getElementById("save-icon2")
const copiedText = document.getElementById('copied-txt')

generateBtn.addEventListener("click", function () {
    pwdField1.textContent = generatePassword()
    pwdField2.textContent = generatePassword()
})

copyIcon1.addEventListener("click", function () { copyText(pwdField1) })
copyIcon2.addEventListener("click", function () { copyText(pwdField2) })

// function to generate a random password

function generatePassword() {
    let pwdLength = document.getElementById("pwd-length").value;
    let password = ""
    for (let i = 0; i < pwdLength; i++) {
        password += characters[Math.floor(Math.random() * characters.length)]
    }
    return password
}

// Function to copy the pwd content to clipboard
// The function also set timeout on the copied text to make it disappear after delay

function copyText(passwordField) {
    navigator.clipboard.writeText(passwordField.textContent)
    copiedText.style.visibility = "visible"
    setTimeout(() => {
        copiedText.style.visibility = "hidden"
    }, 1500);
}


