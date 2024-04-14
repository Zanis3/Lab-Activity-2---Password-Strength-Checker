const showButton = document.getElementById("show-button");
const passwordBox = document.getElementById("password-box");

const bar = document.getElementById("progress-bar");
const progress = document.getElementById("bar-content");
const strengthCheck = document.getElementById("password-text");

showButton.addEventListener('click', function(){
    if(passwordBox.type == 'password'){
        passwordBox.type = 'text';
        showButton.textContent = 'Hide';
    }
    else{
        passwordBox.type = 'password';
        showButton.textContent = 'Show';
    }
})

passwordBox.addEventListener('input', function(){
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()?/<>,.;:'[}]{_-=";
    const numbers = "0123456789";

    let upperCaseCheck = false;
    let lowerCaseCheck = false;
    let symbolsCheck = false;
    let numbersCheck = false;

    const passwordInput = passwordBox.value;

    for(let i = 0; i < passwordInput.length; i++){
        if(uppercase.includes(passwordInput[i])){
            upperCaseCheck = true;
        }
        if(lowercase.includes(passwordInput[i])){
            lowerCaseCheck = true;
        }
        if(symbols.includes(passwordInput[i])){
            symbolsCheck = true;
        }
        if(numbers.includes(passwordInput[i])){
            numbersCheck = true;
        }
    }

    if(passwordInput.length > 0){
        bar.style.display = "flex";
        strengthCheck.style.display = "flex";
        strengthCheck.textContent = "Your password is weak";
        strengthCheck.style.fontWeight = "800";
    }
    else{
        bar.style.display = "none";
        strengthCheck.style.display = "none";
    }

    let counter = 0;
    if(upperCaseCheck == true){
        counter+=1;
    }
    if(lowerCaseCheck == true){
        counter+=1;
    }
    if(symbolsCheck == true){
        counter+=1;
    }
    if(numbersCheck == true){
        counter+=1;
    }
    if(passwordInput.length >= 8){
        counter+=1;
    }
    if(passwordInput.length >= 12){
        counter+=1;
    }

    progress.style.background = "red";

    if(counter == 0){
        progress.style.width = "0%";
    }
    else if(counter == 1){
        progress.style.width = "16%";
    }
    else if(counter == 2){
        progress.style.width = "32%";
    }
    else if(counter == 3){
        progress.style.background = "orange";
        progress.style.width = "48%";
        strengthCheck.textContent = "Your password is fine.";
    }
    else if(counter == 4){
        progress.style.background = "orange";
        progress.style.width = "64%";
        strengthCheck.textContent = "Your password is fine.";
    }
    else if(counter == 5){
        progress.style.background = "green";
        progress.style.width = "80%";
        strengthCheck.textContent = "Your password is strong.";
    }
    else{
        progress.style.background = "green";
        progress.style.width = "100%";
        strengthCheck.textContent = "Your password is strong.";
    }
})