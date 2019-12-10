import split from 'lodash/split';
import forEach from 'lodash/forEach';

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
