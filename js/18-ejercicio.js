/**Encontrar el número máximo
 * 
Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

Nota: Intentarlo hacer sin el método Math.max de JavaScript. */

function max(array) {
    
    let mayor = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= mayor) {
            mayor = array[i]
        }
    }

    return mayor
}

console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26, 99])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9


let nuevoArr = [3, 9, 6, 54, 95, 26, 88]
let mayor = 54

for (let i = 0; i < nuevoArr.length; i++) {
    if (nuevoArr[i] >= mayor) {
        console.log(nuevoArr[i])
    }
    
}
