import readlineSync from 'readline-sync';
import { greeting, congratulations, answerCheck, correctMessage, incorrectMessage } from '../index.js';

const gcd = (firstNumber, secondNumber) => {
  if (secondNumber !== 0) {
    const remainder = firstNumber % secondNumber;
    return gcd(secondNumber, remainder);
  }
  return firstNumber;
};

const gcdGame = () => {
  const userName = greeting();
  let i = 0;
  while (i < 3) {
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const result = gcd(firstNumber, secondNumber);
    console.log(`Find the greatest common divisor of given numbers.\n Question: ${firstNumber} ${secondNumber}`);
    const userAnswer = readlineSync.questionInt('Your answer: ');
    if (answerCheck(userAnswer, result)) {
      correctMessage();
      i += 1;
    } else {
      incorrectMessage(userAnswer, result, userName);
      return;
    }
  }
  congratulations(userName);
};

export default gcdGame;
