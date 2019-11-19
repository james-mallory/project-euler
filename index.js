import forEach from 'lodash/forEach';
import moment from 'moment';
import fs from 'fs';

const PROBLEMS_PATH = './src/problems';
let start, end, count;

function run() {
    console.log(`~~~~~~~~~~~PROJECT EULER~~~~~~~~~~~`);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
    start = moment();
    fs.readdir(PROBLEMS_PATH, importAndRunAll);
}

function importAndRunAll(err, files) {
    count = files.length;
    forEach(files, importAndRun);
    end = moment();

    displayResults();
}

function importAndRun(file) {
    const problem = require(`${PROBLEMS_PATH}/${file}`);
    problem.default();
}

function displayResults() {
    const timeTaken = end.valueOf() - start.valueOf();
    const avgPerProblem = timeTaken / count;

    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`Problems Solved: ${count}`);
    console.log(`Average Time: ${avgPerProblem}ms`);
    console.log(`Total Time: ${timeTaken}ms`);
}

run();

