/**Número de asteriscos en una matriz
 * 
 * Escribir una función llamada numAsteriscos que reciba una matriz
 * (un arreglo de arreglos) y retorne el número de asteriscos:
 */

function numAsteriscos(array) {
    let count = 0;
    for (const fila of array) {
        for (const columna of fila) {
            columna === "*" ? count++ : count;
        }
    }
    return count;
}

console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
  ]))
  // 5