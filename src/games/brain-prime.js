import generateNumber from '../utils.js';
import runEngine from '../index.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const isPrime = (number) => {
  let result;
  let dividerCounter = 0;
  if (number === 1 || number === 0) {
    result = 'no';
  } else {
    for (let i = 2; i <= Math.round(Math.sqrt(number)); i += 1) {
      if (number % i === 0) {
        dividerCounter += 1;
      }
    }
    if (dividerCounter === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
  }
  return result;
};

export const generateRound = () => {
  const question = generateNumber();
  const answer = isPrime(question);
  return [question, answer];
};

export default () => runEngine(gameDescription, generateRound);
