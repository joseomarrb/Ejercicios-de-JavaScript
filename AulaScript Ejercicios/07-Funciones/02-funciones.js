/**
 * Esta función se va a llamar esPar(num) y deberá devolver 
 * verdadero si el argumento es par y falso si es impar. 
 * Se acepta que solo se usarán números válidos.
 * 
 * Aclaraciones: Por ejemplo al llamarla como esPar(5) me dará false, 
 * mientras que con esPar(6) me dará true.
 */

function esPar(num) {
    return num % 2 === 0 ? true : false;
}

console.log(esPar(6)); // true
console.log(esPar(5)); // false