import readlineSync from 'readline-sync';
import { greeting, answerCheck, congratulations, correctMessage, incorrectMessage } from '../index.js';

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

export default evenGame;
