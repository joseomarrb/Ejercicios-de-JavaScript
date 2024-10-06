/**Duplicar elementos de un arreglo
 * 
Escribir una función llamada duplicar que reciba un arreglo de números
 y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2). */

function duplicar(array) {
    
    const nuevoArr = array.map( num => num * 2);
    return nuevoArr

}

console.log(duplicar([1, 2, 3, 50, 22, 789, 1, 0, 99])) // [2, 4, 6]
console.log(duplicar([80, 42, 36, 55, 9, 29, 18]))
console.log(duplicar([])) // []

