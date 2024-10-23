import { greeting, congratulations, answerCheck, correctMessage, incorrectMessage, intAnswer } from '../index.js';

const progressionGeneration = () => {
  const progressionIncrease = Math.floor(Math.random() * 10);
  const progressionFirstNumber = Math.floor(Math.random() * 10);
  const progression = [];
  for (let i = progressionFirstNumber; progression.length < 10; i += progressionIncrease) {
    progression.push(i);
  }
  return progression;
};

const progressionGame = () => {
  const userName = greeting();
  let i = 0;
  while (i < 3) {
    const progression = progressionGeneration();
    const index = Math.floor(Math.random() * 10);
    const result = progression[index];
    progression[index] = '..';
    console.log(`What number is missing in the progression?\n Question: ${progression.join(' ')}`);
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

export default progressionGame;
