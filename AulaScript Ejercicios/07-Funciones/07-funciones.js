/**
 * Escribir una función que reciba un número como argumento y lo 
 * devuelva invertido, o sea, escrito del revés. Usar esta función 
 * para determinar si un número es capicúa (palíndromo)
 * 
 * Aclaraciones: Si ejecuto invertir(123) me deberá devolver el número 321 
 * y me diría que no es capicua. Sin embargo si hago invertir(242) el 
 * resultado sería 242, y la prueba me diría que es capicúa.
 */

function invertir(num) {
    const invertido = num.toString().split("").reverse().join("");
    return parseInt(invertido) === num ? `${num} ES capicúa` : `${num} NO ES capicúa`;
}

console.log(invertir(242))