/*
 
Multiples of 3 and 5

Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

 */

import times from 'lodash/times';
import some from 'lodash/some';

import getIsMultipleOf from '../utils/factoring';

const MAX = 1000;
const MULTIPLE_CHECKS = [3, 5];

let sum = 0;


function solve() {
    times(MAX, addToSum);
    console.log(`Solution: ${sum}`);
}

function addToSum(number) {
    if (number === 0) return 0;

    some(MULTIPLE_CHECKS, numberToCheckIfMultiple => {
        if (getIsMultipleOf(number, numberToCheckIfMultiple)) {
            sum += number;
            return true;
        }
    });
}

console.time(`solve`);
solve();
console.timeEnd(`solve`);
