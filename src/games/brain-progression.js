import runEngine from '../index.js';

export const gameDescription = 'What number is missing in the progression?';

const generateProgression = () => {
  const progressionIncrease = Math.floor(Math.random() * 10);
  const progressionFirstNumber = Math.floor(Math.random() * 10);
  const progression = [];
  for (let i = progressionFirstNumber; progression.length < 10; i += progressionIncrease) {
    progression.push(i);
  }
  return progression;
};

export const generateRound = () => {
  const progression = generateProgression();
  const index = Math.floor(Math.random() * 10);
  const answer = progression[index].toString();
  progression[index] = '..';
  const question = `${progression.join(' ')}`;
  return [question, answer];
};

export default () => runEngine(gameDescription, generateRound);
