import fs from 'fs';
import yargs from 'yargs';
import createComponent from './createComponent';
import { argv, configFileName } from '../../constants/global';

const create = yargs(argv).command({
  command: 'create [directory] [name]',
  handler(args) {
    if (!args.name) args.name = 'Component';

    try {
      const rawData = fs.readFileSync(`${process.cwd()}/${configFileName}`);
      const config = JSON.parse(rawData);
      const findPath = Object.entries(config).find(([key]) => key === args.directory)[1];
      createComponent(findPath, args.name);
    } catch (error) {
      createComponent('/components', args.name);
    }
  },
}).argv;

export default create;
