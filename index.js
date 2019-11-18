import forEach from 'lodash/forEach';
import problems from './src/problems';

function run() {
    forEach(problems, problem => problem(false));
}

console.time(`Time for all problems`);
run();
console.timeEnd(`Time for all problems`);
