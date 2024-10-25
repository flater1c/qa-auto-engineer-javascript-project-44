import { numberGeneration } from '../index.js';

export const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const parityCheck = (number) => {
  let correctAnswer;
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

export const evenGame = () => {
  const taskQuestion = numberGeneration();
  const result = parityCheck(taskQuestion);
  return [taskQuestion, result];
};
