/*
 
Amicable numbers

Problem 21

Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.


solution: 31626

 */

import { getSumOfNumbers } from '../utils/math';
import { getFactors } from '../utils/factoring';

export default function solve() {
    const factorSums = {};
    let amicableSum = 0;
    for (let i = 1; i < 10000; i++) {
        const factors = getFactors(i, true);
        const sumOfFactors = getSumOfNumbers(factors);
        factorSums[i] = sumOfFactors;
        if (i > sumOfFactors && factorSums[sumOfFactors] === i) {
            amicableSum += i + sumOfFactors;
        }
    }

    console.log(`Solution #21: ${amicableSum}`);
}
