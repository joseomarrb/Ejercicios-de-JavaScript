/**
 * Crea un array para albergar al menos 10 números enteros cualesquiera, 
 * luego rellena el array (o créalo ya con los valores). El ejercicio trata 
 * de crear a partir de este array otros dos uno con los números pares y otro 
 * con los impares. No debes usar bucles, usa el método del array qe creas más apropiado.
 * 
 * Aclaraciones: No debes usar bucles, mira el método más apropiado para crear un array a partir de otro.
 * 
 * Un número es par si al dividirlo por 2 el resto es 0 (num%2 es 0)
 */

let array = new Array(10, 8, 7, 4, 9, 12, 22, 95, 78, 26);
let peers = [], odd = [];
array.forEach( num => {
    num % 2 === 0 ? peers.push(num) : odd.push(num);
});