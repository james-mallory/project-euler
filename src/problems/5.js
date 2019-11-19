/*
 
Smallest multiple

Problem 5

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

 */

import some from 'lodash/some';
import { getIsMultipleOf } from '../utils/factoring';

const START = 2520;
const NUMS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let smallestPosNum = 0;

export default function solve() {
    for (let i = START; !smallestPosNum; i++) {
        console.log(`Problem #5: checking ${i}`);
        const isMultipleOfAll = !some(NUMS, num => !getIsMultipleOf(i, num));
        if (isMultipleOfAll) {
            smallestPosNum = i;
        }
    }
    console.log(`Solution #4: ${smallestPosNum}`);
}
