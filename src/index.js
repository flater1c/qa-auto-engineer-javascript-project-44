import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const stringAnswer = () => readlineSync.question('Your answer: ');

export default (gameQuestion, taskData) => {
  const userName = greeting();
  console.log(gameQuestion);
  let i = 0;
  while (i < 3) {
    const [taskQuestion, result] = taskData();
    console.log(`Question: ${taskQuestion}`);
    const userAnswer = stringAnswer();
    if (userAnswer === result) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}.\n Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
