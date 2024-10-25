#!/usr/bin/env node

import engine from '../src/index.js';
import { gcdGame, gameQuestion } from '../src/games/brain-gcd.js';

engine(gameQuestion, gcdGame);
