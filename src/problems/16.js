/*
 
Power digit sum

Problem 16

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?

solution: 1366

 */

import { sumOfDigitsBig } from '../utils/math';

export default function solve() {
    const number = 2n ** 1000n;
    const sum = sumOfDigitsBig(number);
    console.log(`Solution #16: ${sum}`);
}
