/**
 * Escribir un script para determinar si el numero introducido 
 * por el usuario es un palíndromo, es decir, un número que se 
 * lee igual del derecho que del revés.

 * Para invertir el número podéis hacer sucesivas divisiones entre 10: 
 * el resto lo añadis al inveso multiplicado por 10. Y repetis con el valor 
 * entero del numero dividido por 10.
 * 
 * Aclaraciones: Si escribo el número 12421 me dirá que "12421 es un palíndromo"
 * No vale usar strings, solo las operaciones matemáticas necesarias con el número.
 */

let iniciar = prompt("Ahora tendrás que insertar un número para saber si es palindromo o no \nIntroduce cualquier tecla diferente a 0 para comenzar ☺.");

do {
    let numero = parseInt(prompt("Introduce un número de más de un digito para saber si es palindromo"));
    let palindromo = 0;
    if ( numero < 10 ) {
        numero = parseInt(prompt("Introduce un número de más de un digito para saber si es palindromo"));
    } else {
    }



} while ( iniciar );