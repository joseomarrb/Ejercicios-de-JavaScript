/**Número de asteriscos en un arreglo
 * 
 * Escribir una función llamada numAsteriscos que reciba un arreglo y retorne el número de asteriscos:
 */

function numAsteriscos(array) {
    let count = 0;
    for (const num of array) {
        num === "*" ? count++ : count
    }
    return count
}

console.log(numAsteriscos(['', '*', '', '*', "*"])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0