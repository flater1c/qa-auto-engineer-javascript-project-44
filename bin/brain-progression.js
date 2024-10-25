#!/usr/bin/env node

import engine from '../src/index.js';
import { progressionGame, gameQuestion } from '../src/games/brain-progression.js';

engine(gameQuestion, progressionGame);
