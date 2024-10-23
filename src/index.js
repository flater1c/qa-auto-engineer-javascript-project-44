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

export const numberGeneration = () => Math.floor(Math.random() * 100);

export const intAnswer = () => readlineSync.questionInt('Your answer: ');

export const stringAnswer = () => readlineSync.question('Your answer: ');

export const parityCheck = (number) => {
  let correctAnswer;
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

export const primeCheck = (number) => {
  let correctAnswer;
  let dividerCounter = 0;
  if (number === 1 || number === 0) {
    correctAnswer = 'no';
  } else {
    let i;
    for (i = 2; i <= Math.round(Math.sqrt(number)); i += 1) {
      if (number % i === 0) {
        dividerCounter += 1;
      }
    }
    if (dividerCounter === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
  }
  return correctAnswer;
};

export const displayAnswer = (nameGame, number) => {
  switch (nameGame) {
    case 'even':
      console.log(`Answer "yes" if the number is even, otherwise answer "no".\n Question: ${number}`);
      break;
    case 'prime':
      console.log(`Answer "yes" if given number is prime. Otherwise answer "no".\n Question: ${number}`);
      break;
    default:
  }
};

export const evenAndPrimeGame = (mode) => {
  const userName = greeting();
  let i = 0;
  while (i < 3) {
    let correctAnswer;
    const number = numberGeneration();
    if (mode === 'even') {
      correctAnswer = parityCheck(number);
    } else if (mode === 'prime') {
      correctAnswer = primeCheck(number);
    }
    displayAnswer(mode, number);
    const userAnswer = stringAnswer();
    if (answerCheck(userAnswer, correctAnswer)) {
      correctMessage();
      i += 1;
    } else {
      incorrectMessage(userAnswer, correctAnswer, userName);
      return;
    }
  }
  congratulations(userName);
};
