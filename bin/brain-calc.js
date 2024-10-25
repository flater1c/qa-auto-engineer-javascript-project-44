#!/usr/bin/env node

import engine from '../src/index.js';
import { calcGame, gameQuestion } from '../src/games/brain-calc.js';

engine(gameQuestion, calcGame);
