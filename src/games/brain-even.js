import generateNumber from '../utils.js';
import runEngine from '../index.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  let result;
  if (number % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

export const generateRound = () => {
  const question = generateNumber();
  const answer = isEven(question);
  return [question, answer];
};

export default () => runEngine(gameDescription, generateRound);
