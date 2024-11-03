/**
 * Crea un array booleano con dos valores 'verdadero' y 'falso'. Este array te 
 * sirve para traduicr los valores true y false. Usalo para que el script muestre 
 * un alert con el nombre vedadero si un usuario teclea un valor entre 0 y 9 y 
 * falso en el caso contrario.
 * 
 * Aclaraciones: Por ejemplo al teclear 10 deberá devolver falso
 */

const array = ['verdadero', 'falso'];
const num = parseInt(prompt("Inserta un número para saber si esta en el rango del 0 al 9:"));

const rango = num => num >= 0 && num <= 9 ? alert(`${array[0]}`) : alert(`${array[1]}`);
rango(num);