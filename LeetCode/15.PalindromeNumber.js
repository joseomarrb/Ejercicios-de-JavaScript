/**
 * 
 * @param {*} x 
 */

/**
 * Dado un entero x, devuelve verdadero si x es un
 * palíndromo, y falso en caso contrario. 
 * */

var isPalindrome = function(x) {
    let palidrome = x.toString().split('').reverse().join('')
    return parseInt(palidrome) === x ? true : false
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));