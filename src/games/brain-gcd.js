import { numberGeneration } from '../index.js';

export const gameQuestion = 'Find the greatest common divisor of given numbers.';

const gcd = (first, second) => {
  if (second !== 0) {
    const remainder = first % second;
    return gcd(second, remainder);
  }
  return first;
};

export const gcdGame = () => {
  const first = numberGeneration();
  const second = numberGeneration();
  const taskQuestion = `${first} ${second}`;
  const result = gcd(first, second).toString();
  return [taskQuestion, result];
};
