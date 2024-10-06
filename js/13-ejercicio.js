/**Remover ceros
 * 
Escribir una función llamada removerCeros que reciba un arreglo de números
y retorne un nuevo arreglo excluyendo los ceros (0). */


function removerCeros(arr) {

    let nuevo = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            nuevo.push(arr[i])
        }
    }
    return nuevo;
}

console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([5, 0, 12, 9, 10, 0, 2, 0])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []