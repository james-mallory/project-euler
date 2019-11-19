import forEach from 'lodash/forEach';
import fs from 'fs';

const PROBLEMS_PATH = './src/problems';

function run() {
    console.time(`Time for all problems`);
    fs.readdir(PROBLEMS_PATH, importAndRunAll);
}

function importAndRunAll(err, files) {
    forEach(files, importAndRun);
    console.timeEnd(`Time for all problems`);
}

function importAndRun(file) {
    const problem = require(`${PROBLEMS_PATH}/${file}`);
    problem.default();
}

run();

