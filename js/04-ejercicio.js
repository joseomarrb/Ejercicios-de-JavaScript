/**Imprimir un arreglo
 * 
Escribir una función llamada imprimirArreglo que reciba un arreglo
e imprima cada elemento en una línea a parte: */

function imprimirArreglo(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]) ;
    }
    return arr;
}

console.log(imprimirArreglo([1, "Hola", 2, "Mundo"]))
// 1
// Hola
// 2
// Mundo