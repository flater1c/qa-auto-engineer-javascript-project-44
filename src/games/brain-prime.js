import {
  greeting, answerCheck, congratulations, correctMessage, incorrectMessage,
  numberGeneration, stringAnswer,
} from '../index.js';

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

const correctAnswerAssign = (number) => {
  let correctAnswer;
  if (primeCheck(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

const primeGame = () => {
  const userName = greeting();
  let i = 0;
  while (i < 3) {
    const number = numberGeneration();
    const correctAnswer = correctAnswerAssign(number);
    console.log(`Answer "yes" if given number is prime. Otherwise answer "no".\n Question: ${number}`);
    const userAnswer = stringAnswer();
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
