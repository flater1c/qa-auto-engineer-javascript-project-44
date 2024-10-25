import { numberGenerate } from '../index.js';

export const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const primeCheck = (number) => {
  let correctAnswer;
  let dividerCounter = 0;
  if (number === 1 || number === 0) {
    correctAnswer = 'no';
  } else {
    let i;
    for (i = 2; i <= Math.round(Math.sqrt(number)); i += 1) {
      if (number % i === 0) {
        dividerCounter += 1;
      }
    }
    if (dividerCounter === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
  }
  return correctAnswer;
};

export const primeGame = () => {
  const taskQuestion = numberGenerate();
  const result = primeCheck(taskQuestion);
  return [taskQuestion, result];
};
