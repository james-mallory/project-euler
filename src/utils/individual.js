import { argv as args } from 'yargs';

const problem = args.p;

const problemSolver = require(`../problems/${problem}`).default;

console.time(`elapsed time`);
problemSolver();
console.timeEnd(`elapsed time`);