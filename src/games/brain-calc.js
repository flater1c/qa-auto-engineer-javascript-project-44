import { numberGeneration } from '../index.js';

export const gameQuestion = 'What is the result of the expression?';

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * (operators.length));
  return operators[randomIndex];
};

const correctAnswerAssign = (firstNumber, secondNumber, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      result = null;
  }
  return result;
};

export const calcGame = () => {
  const firstNumber = numberGeneration();
  const secondNumber = numberGeneration();
  const operator = randomOperator();
  const taskQuestion = `${firstNumber} ${operator} ${secondNumber}`;
  const result = correctAnswerAssign(firstNumber, secondNumber, operator).toString();
  return [taskQuestion, result];
};
