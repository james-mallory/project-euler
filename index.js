import forEach from 'lodash/forEach';
import problems from './src/problems';

function run() {
    forEach(problems, problem => problem(false));
}

console.time(`run`);
run();
console.timeEnd(`run`);
