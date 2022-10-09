#!/usr/bin/env node

import yargs from 'yargs/yargs';
import { version } from '../package.json';
import { argv } from './constants/global';
import './commands';

yargs(argv).version(version).alias('version', 'v').argv;
