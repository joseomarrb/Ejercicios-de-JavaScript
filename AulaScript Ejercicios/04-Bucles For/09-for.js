/**
 * Se trata de crear una aplicación que calcule la suma de todos los 
 * números enteros positivos entre 0 y el número tecleado por el usuario. 
 * El resultado será de la forma "Los números enteros de 0 a n  suman suma"
 * 
 * Aclaraciones: Si tecleo el 5 obtendré "Los enteros de 0 a 5 suman 15" (1+2+3+4+5 ).
 */

const numero = parseInt(prompt("Ingresa un número para saber la suma desde el 1 hasta tu número"));
let output = 0;

for (let num1 = 1; num1 <= numero ; num1++) {
    output += num1;
}

console.log(output)