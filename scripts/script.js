let randomNumber = Math.floor(Math.random() * 3) + 1;
let gameOver = false;
const lastResult = document.querySelector('.lastResult');
const buttons = document.querySelector('.btn-group');
const primaryButton = document.querySelector('.primaryButton');
const secondaryButton = document.querySelector('.secondaryButton');
const tertiaryButton = document.querySelector('.tertiaryButton');
const allButtons = [primaryButton, secondaryButton, tertiaryButton];

let resetButton;

buttons.addEventListener('click', (event) => {  
  if (!event.target.nodeName === 'BUTTON' || gameOver) {
    return;
  }
  if(Number(event.target.id) === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    
  } else {
    lastResult.textContent = '!!!GAME OVER!!!' + ` THE WINNER BUTTON WAS ${randomNumber}!`;
    lastResult.style.backgroundColor = 'red';
  }
  setGameOver();
});

function setGameOver() {
    allButtons.forEach(button => button.disabled = true);
    if (!gameOver) {
      resetButton = document.createElement('button');
      resetButton.textContent = 'Start new game';
      document.body.append(resetButton);
      resetButton.addEventListener('click', resetGame);
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