#!/usr/bin/env node

import engine from '../src/index.js';
import { evenGame, gameQuestion } from '../src/games/brain-even.js';

engine(gameQuestion, evenGame);
