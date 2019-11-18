import some from 'lodash/some';

export function getIsMultipleOf(A, B) {
    return A % B === 0;
}

export function getIsPrime(number) {
    const root = Math.sqrt(number);
    let isPrime = true;
    for (let i = 2; i < root; i++) {
        if (getIsMultipleOf(number, i)) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}
