/**Imprimir una matriz
 * 
Escribir una función llamada imprimirMatriz que reciba
una matriz (un arreglo de arreglos) e imprima todos los
 elementos del arreglo. */


function imprimirMatriz(array) {

    for (const fila of array) {
        for (const columna of fila) {
            console.log(columna)
        }
    }

    // for (let i = 0; i < array.length; i++) {
    //     for (let j = 0; j < array[i].length; j++) {
    //         console.log(array[i][j])
    //     }
    // }
    
}

console.log(imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))
