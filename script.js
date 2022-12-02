'use strict';

const guess = document.querySelector('.guess');
const btnAgain = document.querySelector('.again');
const numberToGuess = document.querySelector('.number');
const backgroundChange = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const currentScore = function (score) {
  document.querySelector('.score').textContent = score;
};

let score = 20;
let highscore = 0;
let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);

document.querySelector('.check').addEventListener('click', function () {
  const guessNum = Number(guess.value);
  // No input
  if (!guessNum) {
    displayMessage('⛔ No number!');

    // Win
  } else if (guessNum === secretNumber) {
    displayMessage('🎉Correct Number!');
    backgroundChange('#60b347');
    numberToGuess.style.width = '30rem';
    numberToGuess.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Different -too low or too high
  } else if (guessNum !== secretNumber) {
    if (score > 1) {
      displayMessage(guessNum > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      currentScore(score);
    } else {
      displayMessage('You lost the game!');
      currentScore(score);
    }
  }
});

// Reset

btnAgain.addEventListener('click', function () {
  guess.value = '';
  score = 20;
  currentScore(score);
  displayMessage('Start guessing...');
  backgroundChange('#222');
  numberToGuess.style.width = '15rem';
  numberToGuess.textContent = '?';
  secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
});
