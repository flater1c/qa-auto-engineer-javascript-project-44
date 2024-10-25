import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const congratulations = (username) => {
  console.log(`Congratulations, ${username}!`);
};

export const correctMessage = () => {
  console.log('Correct!');
};

export const incorrectMessage = (userAnswer, correctAnswer, userName) => {
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${userName}!`);
};

export const answerCheck = (userAnswer, correctAnswer) => (userAnswer === correctAnswer);

export const numberGenerate = () => Math.floor(Math.random() * 100);

export const stringAnswer = () => readlineSync.question('Your answer: ');

export default (gameQuestion, taskData) => {
  const userName = greeting();
  console.log(gameQuestion);
  let i = 0;
  while (i < 3) {
    const [taskQuestion, result] = taskData();
    console.log(`Question: ${taskQuestion}`);
    const userAnswer = stringAnswer();
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
