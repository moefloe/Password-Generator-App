
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]
const pwdField1 = document.getElementById("password-el1")
const pwdField2 = document.getElementById("password-el2")
const generateBtn = document.getElementById("generate-btn")
const copyIcon1 = document.getElementById("save-icon1")
const copyIcon2 = document.getElementById("save-icon2")



// function to generate two new passwords when the Generate button is clicked

generateBtn.addEventListener('click', function generate() {
    pwdField1.textContent = ''
    pwdField2.textContent = ''
    let pwdLength = document.getElementById("pwd-length").value;

    let copiedText = document.getElementById("copied-txt")

    for (let i = 0; i < pwdLength; i++) {
        let pwd1 = Math.floor(Math.random() * characters.length)
        let pwd2 = Math.floor(Math.random() * characters.length)
        pwdField1.textContent += characters[pwd1]
        pwdField2.textContent += characters[pwd2]
    }
})

// Adding event listeners to copy the pwd content to clipboard
// Also set timeout on the copied text to make it disappear after delay

copyIcon1.addEventListener('click', () => {
    navigator.clipboard.writeText(pwdField1.textContent)
    copiedText.classList.add("txt-copied")
    setTimeout(() => {
        copiedText.classList.remove('txt-copied');
    }, 1000);
})

copyIcon2.addEventListener('click', () => {
    navigator.clipboard.writeText(pwdField2.textContent)
    copiedText.classList.add("txt-copied")
    setTimeout(() => {
        copiedText.classList.remove('txt-copied');
    }, 1000);
})


