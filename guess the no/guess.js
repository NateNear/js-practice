let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess (){
    const userGuess = Number(guessField.value);

    if (guessCount==1){
        guesses.textContent = "Previous guesses:";
    }
    guesses.textContent  = `${guesses.textContent} ${guessField.value}`

    if(userGuess === randomNumber){
        lastResult.textContent = "Congratulations!!"
        lastResult.style.backgroundColor= "green"
        lowOrHi.textContent = ""
        setGameOver();
    }
    else if(userGuess == 10){
        lastResult.textContent = "Failed"
        lowOrHi.textContent = ""
        setGameOver();
    }
    else{
        lastResult.textContent = "Not right"
        lastResult.style.backgroundColor= "red"
        if(userGuess<randomNumber){
            lowOrHi.textContent = "less than number"
            // setGameOver();
        }
        else if(userGuess>randomNumber){
            lowOrHi.textContent = "more than number"
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
} 

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guessField.disabled = true
    guessSubmit.disabled = true

    resetButton = document.createElement("button")
    resetButton.textContent = "Start new game"
    document.body.append(resetButton)
    resetButton.addEventListener("click", resetGame)
}

function resetGame() {
    guessCount = 1;

    const resultParas = document.querySelectorAll(".resultParas p");
    for (const x of resultParas) {
        x.textContent = "";
    }

    resetButton.remove();

    lastResult.style.backgroundColor= "white"

    guessField.disabled = false
    guessSubmit.disabled = false
    
    guessField.value = "";
    guessField.focus();

    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber)

}
