/*
 
Largest palindrome product

Problem 4

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

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
