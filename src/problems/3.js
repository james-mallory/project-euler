/*
 
Largest prime factor

Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

 */

import { getIsPrime, getIsMultipleOf } from '../utils/factoring';

const NUM = 600851475143;

let largestPrimeFactor = 0;

export default function solve() {
    const root = Math.floor(Math.sqrt(NUM));
    for (let i = root; i > 1; i--) {
        if (getIsMultipleOf(NUM, i) && getIsPrime(i)) {
            largestPrimeFactor = i;
            break;
        }
    }

    console.log(`Solution #3: ${largestPrimeFactor}`);
}
