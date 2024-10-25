export const gameQuestion = 'What number is missing in the progression?';

const progressionGeneration = () => {
  const progressionIncrease = Math.floor(Math.random() * 10);
  const progressionFirstNumber = Math.floor(Math.random() * 10);
  const progression = [];
  for (let i = progressionFirstNumber; progression.length < 10; i += progressionIncrease) {
    progression.push(i);
  }
  return progression;
};

export const progressionGame = () => {
  const progression = progressionGeneration();
  const index = Math.floor(Math.random() * 10);
  const result = progression[index].toString();
  progression[index] = '..';
  const taskQuestion = `${progression.join(' ')}`;
  return [taskQuestion, result];
};
