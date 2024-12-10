/**
 * Una frase es un palíndromo si, después de convertir todas las letras mayúsculas 
 * en minúsculas y eliminar todos los caracteres no alfanuméricos, se lee igual hacia 
 * adelante y hacia atrás. Los caracteres alfanuméricos incluyen letras y números.
 * 
 * Dada una cadena s, devuelve verdadero si es un palíndromo o falso en caso contrario.
 */

var isPalindrome = function(s) {
    let first = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reverse = first.split('').reverse().join('');
    return first === reverse ? true : false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(' '));

