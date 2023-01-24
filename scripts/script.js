let randomNumber = Math.floor(Math.random() * 3) + 1;

const lastResult = document.querySelector('.lastResult');
const buttons = document.querySelector('.btn-group');
const primaryButton = document.querySelector('.primaryButton');
const secondaryButton = document.querySelector('.secondaryButton');
const tertiaryButton = document.querySelector('.tertiaryButton');

let resetButton;

buttons.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  
  if (!isButton) {
    return;
  } else if(Number(event.target.id) === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    setGameOver();
  } else {
    lastResult.textContent = '!!!GAME OVER!!!' + ` THE WINNER BUTTON WAS ${randomNumber}!`;
    lastResult.style.backgroundColor = 'red';
    setGameOver();
  }
});

function setGameOver() {
    primaryButton.disabled = true;
    secondaryButton.disabled = true;
    tertiaryButton.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    lastResult.textContent = '';

    resetButton.parentNode.removeChild(resetButton);

    primaryButton.disabled = false;
    secondaryButton.disabled = false;
    tertiaryButton.disabled = false;

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 3) + 1;
}