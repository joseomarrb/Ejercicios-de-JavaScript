/**
 * En este script debes pedir al usuario un número de dos dígitos y debes devolver
 * el número de unidades y de decenas, o sea, cada dígito del número. Usa solo operationes aritméticas

 * Recuerda si divides un número entre 10 el cociente entero es el número de decenas y
 * el resto es el número de unidades
 * 
 * Aclaraciones:
 * Si ese teclea el número 45 = Unidades: 5, Decenas: 4
 */

const numDigitos = parseInt(prompt("Inserta un número de dos digitos:"));

let resultado = alert(`Decenas: ${parseInt(numDigitos / 10)} \nUnidades: ${numDigitos % 10}`);