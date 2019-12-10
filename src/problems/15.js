/*
 
Lattice paths

Problem 15

Starting in the top left corner of a 2�2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20�20 grid?

solution: 137846528820

 */

import { choose } from '../utils/math';

export default function solve() {
    const result = choose(40, 20);
    console.log(`Solution #15: ${result}`);
}
