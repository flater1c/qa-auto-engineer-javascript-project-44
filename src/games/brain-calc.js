import {
  greeting, congratulations, answerCheck, correctMessage, incorrectMessage,
  numberGeneration, intAnswer,
} from '../index.js';

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * (operators.length));
  return operators[randomIndex];
};

const calcGame = () => {
  const userName = greeting();
  let i = 0;
  while (i < 3) {
    const firstNumber = numberGeneration();
    const secondNumber = numberGeneration();
    let result;
    const operator = randomOperator();
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
