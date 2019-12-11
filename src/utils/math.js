import split from 'lodash/split';
import forEach from 'lodash/forEach';

import * as NUMBER_COUNTS from './numberOfLetters';

export function getIsPalindrome(number) {
    const numberString = number.toString();
    const reverseString = numberString.split(``).reverse().join(``);
    return numberString === reverseString;
}

export function getSumOfSquares(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += Math.pow(i, 2);
    }
    return sum;
}

export function getSquareOfSums(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return Math.pow(sum, 2);
}

export function getDiffSquareOfSumsSubSumOfSquares(min, max) {
    return getSquareOfSums(min, max) - getSumOfSquares(min, max);
}

export function getMaxProductOfNAdjacentDigits(number, n) {
    const numberString = number.toString();
    const numberArray = split(numberString, ``);

    let maxProduct = 0;
    const nNumbersArray = [];
    forEach(numberArray, numberAsString => {
        const num = parseInt(numberAsString);
        nNumbersArray.push(num); 

        if (nNumbersArray.length > n) {
            nNumbersArray.shift();
        }

        if (nNumbersArray.length === n) {
            const product = getProductOfNumbers(nNumbersArray);
            if (product > maxProduct) maxProduct = product;
        }
        
    });
    return maxProduct;
}

export function getProductOfNumbers(numbers) {
    let product = 1;
    forEach(numbers, number => {
        product *= number;
    });
    return product;
}

export function getIsPythagoreanTriplet(a, b, c) {
    return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
}

export function getNthTriangularNumber(n) {
    let number = 0;
    for (let i = 0; i < n; i++) {
        number += i + 1;
    }
    return number;
}

export function getNthConsecutiveProduct(n) {
    let product = 1;
    for (let i = 1; i <= n; i++) {
        product *= i;
    }
    return product;
}

export function factorial(n) {
    return getNthConsecutiveProduct(n);
}

export function getCollatzSequence(startingNumber, sequenceDictionary = {}) {
    let sequence = [startingNumber];

    while (sequence[sequence.length - 1] !== 1) {
        const num = sequence[sequence.length - 1];
        const dictionary = sequenceDictionary[num];
        if (dictionary) {
            sequence = sequence.concat(dictionary.slice(1));
        } else {
            const isEven = num % 2 === 0;
            if (isEven) {
                sequence.push(num / 2);
            } else {
                sequence.push(3 * num + 1);
            }
        }
    }
    sequenceDictionary[startingNumber] = sequence;
    return sequence;
}

export function permute(n, r) {
    return factorial(n) / factorial(n - r);
}

export function choose(n, r) {
    return factorial(n) / (factorial(n - r) * factorial(r));
}

export function sumOfDigits(number) {
    let sum = 0;
    while (number !== 0) {
        const onesDigit = number % 10;
        sum += onesDigit;
        number -= onesDigit;
        number /= 10;
    }
    return sum;
}

export function sumOfDigitsBig(number) {
    let sum = 0n;
    while (number !== 0n) {
        const onesDigit = number % 10n;
        sum += onesDigit;
        number -= onesDigit;
        number /= 10n;
    }
    return sum;
}

// for numbers 1 through 1000
export function getNumberLetterCount(number) {
    let wordCount = 0;
    if (number > 999) {
        wordCount += NUMBER_COUNTS.ONES_DIGIT[1] + NUMBER_COUNTS.THOUSAND;
    } else {
        const onesDigit = number % 10;
        const tensDigit = (number % 100 - onesDigit) / 10;
        const hundredsDigit = (number % 1000 - 10 * tensDigit - onesDigit) / 100;

        if (number > 99) {
            wordCount += NUMBER_COUNTS.ONES_DIGIT[hundredsDigit] + NUMBER_COUNTS.HUNDRED;
            if (tensDigit !== 0 || onesDigit !== 0) wordCount += NUMBER_COUNTS.AND;
        }

        if (number > 9) {
            if (tensDigit === 1) {
                wordCount += NUMBER_COUNTS.TEENS[onesDigit];
            } else if (tensDigit > 0) {
                wordCount += NUMBER_COUNTS.TENS_DIGIT[tensDigit];
            }
        }

        if (tensDigit !== 1 && onesDigit > 0) wordCount += NUMBER_COUNTS.ONES_DIGIT[onesDigit];
    }

    return wordCount;
}
