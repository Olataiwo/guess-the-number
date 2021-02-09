'use strict';

const check = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 20 + 1);
var highScore = 0;
let score = 20;
console.log(highScore);
console.log(secretNumber);

const displayMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};

check.addEventListener('click', function () {
  console.log('clicked');
  const guessedNumber = Number(document.querySelector('.guess').value);

  if (!guessedNumber) {
    displayMessage('No number entered');
  } else if (guessedNumber === secretNumber) {
    displayMessage('Correct Answer');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore)
      document.querySelector('.highscore').textContent = score;
  } else if (guessedNumber !== secretNumber) {
    if (score !== 0) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(
        guessedNumber > secretNumber ? 'Number too high !' : 'Number too low !'
      );
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
