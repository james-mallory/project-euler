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
