import {
  greeting, congratulations, answerCheck, correctMessage, incorrectMessage,
  numberGeneration, intAnswer,
} from '../index.js';

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

const calcGame = () => {
  const userName = greeting();
  let i = 0;
  while (i < 3) {
    const firstNumber = numberGeneration();
    const secondNumber = numberGeneration();
    const operator = randomOperator();
    const result = correctAnswerAssign(firstNumber, secondNumber, operator);
    console.log(`What is the result of the expression?\n Question: ${firstNumber} ${operator} ${secondNumber}`);
    const userAnswer = intAnswer();
    if (answerCheck(userAnswer, result)) {
      correctMessage();
      i += 1;
    } else {
      incorrectMessage(userAnswer, result, userName);
      return;
    }
  }
  congratulations(userName);
};

export default calcGame;
