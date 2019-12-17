/*
 
Names scores

Problem 22

Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?

solution: 871198282

 */

import sortBy from 'lodash/sortBy';
import reduce from 'lodash/reduce';
import { getStringAlphabeticalValue } from '../utils/math';
import names from '../data/p022_names';

export default function solve() {
    const sortedNames = sortBy(names, [value => value]);
    const sum = reduce(sortedNames, (mem, name, key) => {
        const alphabetValue = getStringAlphabeticalValue(name);
        return mem + (alphabetValue * (key + 1));
    }, 0);


    console.log(`Solution #22: ${sum}`);
}
