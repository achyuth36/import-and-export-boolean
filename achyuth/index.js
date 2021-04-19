let bgContainerEl = document.getElementById("bgContainer");
let themeUserInputEl = document.getElementById("themeUserInput");

let colorPickerContainerElement = document.getElementById(
  "colorPickerContainer"
);

function changeBgToGreyAndUpdateText() {
  colorPickerContainerElement.style.backgroundColor = "#e0e0e0";
}

function changeBgToGreenAndUpdateText() {
  colorPickerContainerElement.style.backgroundColor = "#ffcce6";
}

let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
  let guessedNunmber = parseInt(userInput.value);

  if (guessedNunmber > randomNumber) {
    gameResult.textContent = "too high";
    gameResult.style.backgroundColor = "blue";
  } else if (guessedNunmber < randomNumber) {
    gameResult.textContent = "too low";
    gameResult.style.backgroundColor = "black";
  } else if (guessedNunmber === randomNumber) {
    gameResult.textContent = "congrats!! you got it..";
    gameResult.style.backgroundColor = "green";
  } else {
    gameResult.textContent = "pls enter a valid number";
    gameResult.style.backgroundColor = "red";
  }
}

let preloader = document.getElementById("loading");

function myFunction() {
  preloader.style.display = "none";
}
