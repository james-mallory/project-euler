/*
 
Summation of primes

Problem 10

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

solution: 142913828922

 */

import { getIsPrime } from '../utils/factoring';

export default function solve() {
    let sum = 0;
    for (let i = 2; i < 2000000; i++) {
        if (getIsPrime(i)) sum += i;
    }
    console.log(`Solution #10: ${sum}`);
}