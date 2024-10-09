import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const congratulations = (username) => {
  console.log(`Congratulations ${username}!`);
};

export const correctMessage = () => {
  console.log('Correct!');
};

export const incorrectMessage = (userAnswer, correctAnswer, userName) => {
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${userName}!`);
};

export const answerCheck = (userAnswer, correctAnswer) => (userAnswer === correctAnswer);
