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
