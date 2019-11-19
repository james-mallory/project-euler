/*
 
Smallest multiple

Problem 5

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

 */

import { getIsPalindrome } from '../utils/math';

const NUM = 999;

let largestPalidrome = 0;

export default function solve() {
    for (let i = NUM; i > 99; i--) {
        for (let j = NUM; j > 99; j--) {
            const product = i * j;
            if (getIsPalindrome(product)) {
                if (product > largestPalidrome) largestPalidrome = product;
                break;
            }
        }
    }

    console.log(`Solution #4: ${largestPalidrome}`);
}
