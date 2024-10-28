import generateNumber from '../utils.js';
import runEngine from '../index.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (first, second) => {
  if (second !== 0) {
    const remainder = first % second;
    return findGcd(second, remainder);
  }
  return first;
};

export const generateRound = () => {
  const first = generateNumber();
  const second = generateNumber();
  const question = `${first} ${second}`;
  const answer = findGcd(first, second).toString();
  return [question, answer];
};

export default () => runEngine(gameDescription, generateRound);
