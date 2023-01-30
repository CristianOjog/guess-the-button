let randomNumber = Math.floor(Math.random() * 3) + 1;

const lastResult = document.querySelector('.lastResult');
const primaryButton = document.querySelector('.primaryButton');
const secondaryButton = document.querySelector('.secondaryButton');
const tertiaryButton = document.querySelector('.tertiaryButton');
const allButtons = [primaryButton, secondaryButton, tertiaryButton];

let resetButton;
let gameOver = false;

function checkWinnerButton(idButton) {
    if(Number(idButton) === randomNumber) {
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';
      
    } else {
      lastResult.textContent = '!!!GAME OVER!!!' + ` THE WINNER BUTTON WAS ${randomNumber}!`;
      lastResult.style.backgroundColor = 'red';
    }
    setGameOver();
} 

function setGameOver() {
    allButtons.forEach(button => button.disabled = true);
    if (!gameOver) {
      resetButton = document.createElement('button');
      resetButton.textContent = 'Start new game';
      resetButton.onclick = resetGame;
      document.body.append(resetButton);
    }
    gameOver = true;
}

function resetGame() {
  resetAll();
  gameOver = false;
}

function resetAll() {
  lastResult.textContent = '';
  allButtons.forEach(button => button.disabled = false);
  lastResult.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * 3) + 1;
  if (resetButton) {
    resetButton.parentNode.removeChild(resetButton);
  }
}