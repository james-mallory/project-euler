export function getIsPalindrome(number) {
    const numberString = number.toString();
    const reverseString = numberString.split(``).reverse().join(``);
    return numberString === reverseString;
}
