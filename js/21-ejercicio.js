/**Encontrar números pares en un arreglo
 * 
Escribir una función llamada pares que reciba un arreglo de números y
 retorne un nuevo arreglo con los números pares únicamente. */

function pares(array) {

    const numPares = array.filter( num => num % 2 === 0);
    return numPares;
}

console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([12, 98, 77, 14, 45, 26])) // [2, 4, 6]
console.log(pares([])) // []