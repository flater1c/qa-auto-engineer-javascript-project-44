#!/usr/bin/env node

import engine from '../src/index.js';
import { primeGame, gameQuestion } from '../src/games/brain-prime.js';

engine(gameQuestion, primeGame);
