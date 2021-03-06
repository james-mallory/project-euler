import forEach from 'lodash/forEach';
import max from 'lodash/max';
import uniq from 'lodash/uniq';
import get from 'lodash/get';

export function getIsMultipleOf(A, B) {
    return A % B === 0;
}

export function getFactors(number, isProper) {
    const factors = [1];
    if (number === 1) return factors;
    const halfway = Math.ceil(number / 2) + 1;
    for (let i = 2; i < halfway; i++) {
        if (getIsMultipleOf(number, i)) {
            factors.push(i);
        }
    }
    if (!isProper) {
        factors.push(number);
    }
    return factors;
}

export function getNthPrime(n) {
    let currentPrime = 2;
    let primeCounter = 0;
    let counter = 2;
    while (primeCounter < n) {
        if (getIsPrime(counter)) {
            currentPrime = counter;
            primeCounter++;
        }
        counter++;
    }
    return currentPrime;
}

export function getIsPrime(number) {
    if (number === 2) return true;
    if (number === 1) return false;

    const root = Math.floor(Math.sqrt(number));
    let isPrime = true;
    for (let i = 2; i <= root + 1; i++) {
        if (getIsMultipleOf(number, i)) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

export function getIsPrimeFactor(number, i) {
    return getIsMultipleOf(number, i) && getIsPrime(i);
}

export function getPrimeFactors(number, factors) {
    let done = false;
    let newNum = number;
    for (let i = 2; i <= number; i++) {
        if (getIsPrimeFactor(number, i)) {
            factors.push(i);
            newNum /= i;
            if (i === number) {
                done = true;
            }
            break;
        }
    }
    if (!done) getPrimeFactors(newNum, factors);
    return;
}

export function findLCMFromPrimeFactors(factorsA, factorsB) {
    const countsA = getFactorCount(factorsA);
    const countsB = getFactorCount(factorsB);
    const combinedFactors = uniq([...factorsA, ...factorsB]);
    let lcm = 1;
    forEach(combinedFactors, factor => {
        const countA = get(countsA, `${factor}`, 0);
        const countB = get(countsB, `${factor}`, 0);
        const maxCount = max([countA, countB]);
        lcm *= Math.pow(factor, maxCount);
    });
    return lcm;
}

// How many times does each prime factor appear?
function getFactorCount(factors) {
    const factorCount = {};
    forEach(factors, factor => {
        if (!factorCount[factor]) {
            factorCount[factor] = 0;
        }
        factorCount[factor]++;
    });
    return factorCount;
}

export function getLCM(A, B) {
    if (A === 1 || B === 1) return max([A, B]);
    const primeFactorsA = [];
    getPrimeFactors(A, primeFactorsA);
    const primeFactorsB = [];
    getPrimeFactors(B, primeFactorsB);
    return findLCMFromPrimeFactors(primeFactorsA, primeFactorsB);
}
