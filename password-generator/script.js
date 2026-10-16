const passwordInput = document.querySelector("#password");
const genButton = document.querySelector("#btn");
const copyIcon = document.querySelector(".copy-icon");

const passLength = 8;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "`~!@#$%^&*()_+={}[]\|;:',.<>/?-";
const allChars = upperCase + lowerCase + numbers + symbol;

function genRandomPassword () {
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(passLength > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordInput.value = password;
}

function copyPassword () {
    passwordInput.select();
    document.execCommand("copy");
}

genButton.addEventListener("click", genRandomPassword);
copyIcon.addEventListener("click", copyPassword);