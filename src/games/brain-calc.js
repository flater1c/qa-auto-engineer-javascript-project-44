import generateNumber from '../utils.js';
import runEngine from '../index.js';

export const gameDescription = 'What is the result of the expression?';

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * (operators.length));
  return operators[randomIndex];
};

const generateResult = (first, second, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = first + second;
      break;
    case '-':
      result = first - second;
      break;
    case '*':
      result = first * second;
      break;
    default:
      result = null;
  }
  return result;
};

export const generateRound = () => {
  const first = generateNumber();
  const second = generateNumber();
  const operator = randomOperator();
  const question = `${first} ${operator} ${second}`;
  const answer = generateResult(first, second, operator).toString();
  return [question, answer];
};

export default () => runEngine(gameDescription, generateRound);
