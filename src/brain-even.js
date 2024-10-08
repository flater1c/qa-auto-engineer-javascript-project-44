#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../bin/cli.js';

const parityCheck = (number) => number % 2 === 0;

const evenGame = () => {
  const userName = greeting();
  let i = 0;
  while (i < 3) {
    const number = Math.floor(Math.random() * 100);
    const parityCheckResult = parityCheck(number);
    let correctAnswer;
    if (parityCheckResult) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    console.log(`Answer "yes" if the number is even, otherwise answer "no".\n Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations ${userName}!`);
};

export default evenGame;
