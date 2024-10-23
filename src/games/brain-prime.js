import readlineSync from 'readline-sync';
import { greeting, answerCheck, congratulations, correctMessage, incorrectMessage, numberGeneration } from '../index.js';

const primeCheck = (number) => {
  let dividerCounter = 0;
  if (number === 1) {
    dividerCounter = 1;
  } else {
    let i;
    for (i = 2; i <= Math.round(Math.sqrt(number)); i += 1) {
      if (number % i === 0) {
        dividerCounter += 1;
      }
    }
  }
  return dividerCounter === 0;
};

const primeGame = () => {
  const userName = greeting();
  let i = 0;
  while (i < 3) {
    const number = numberGeneration();
    let correctAnswer;
    if (primeCheck(number)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    console.log(`Answer "yes" if given number is prime. Otherwise answer "no".\n Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answerCheck(userAnswer, correctAnswer)) {
      correctMessage();
      i += 1;
    } else {
      incorrectMessage(userAnswer, correctAnswer, userName);
      return;
    }
  }
  congratulations(userName);
};

export default primeGame;
