const button = document.getElementById('button');
      message = document.getElementById('message');
      number = getRandomNumber();
      game = document.getElementById('container');

let lives = 3;

function getRandomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

button.addEventListener('click', validateInput);
game.addEventListener('mousedown', function(e) {
  if(e.target.className == 'new-game') {
    window.location.reload();
  }
});

function validateInput() {
  let guess = document.getElementById('guess');
  console.log(Number(guess.value))
  if(Number(guess.value) > 0 && Number(guess.value) <= 10) {
    checkInput(guess);
  } else {
    printMessage(`${guess.value} is not between 1 and 10!`);
  }
}

function checkInput(guess) {
 if(Number(guess.value) === number) {
    win(guess);
  } else {
    loose(guess);
  }
}
console.log(number)

function win(guess) {
  printMessage(`${guess.value} is correct!`, 'green');
  setNewGame();
}

function loose(guess) {
  lives--;
  if(lives !== 0) {
    printMessage(`${guess.value} is not correct, you have ${lives} lives.`);
  } else {
    printMessage(`Game over, the correct answer was ${number}`, 'red');
    setNewGame();
  }
}

function setNewGame() {
  button.value = 'New Game';
  button.className = 'new-game';
}

function printMessage(msg, color) {
  document.getElementById('message').textContent = msg;
  document.getElementById('message').style.color = color;
  document.getElementById('guess').style.borderColor = color;
}