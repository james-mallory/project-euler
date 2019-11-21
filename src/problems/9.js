/*
 
Special Pythagorean triplet

Problem 9

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a2 + b2 = c2

For example, 3^2 + 4^2 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

solution: 31875000

 */

export default function solve() {
    let triplet = 0;
    for (let a = 0; a < 1000 && !triplet; a++) {
        for (let b = 0; b < a && !triplet; b++) {
            const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            if (a + b + c === 1000) triplet = a * b * c;
        }
    }
    console.log(`Solution #9: ${triplet}`);
}
