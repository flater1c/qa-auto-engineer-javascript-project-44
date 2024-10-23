import {
  greeting, answerCheck, congratulations, correctMessage, incorrectMessage,
  numberGeneration, stringAnswer,
} from '../index.js';

const parityCheck = (number) => number % 2 === 0;

const correctAnswerAssign = (number) => {
  let correctAnswer;
  if (parityCheck(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

const evenGame = () => {
  const userName = greeting();
  let i = 0;
  while (i < 3) {
    const number = numberGeneration();
    const correctAnswer = correctAnswerAssign(number);
    console.log(`Answer "yes" if the number is even, otherwise answer "no".\n Question: ${number}`);
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

export default evenGame;
