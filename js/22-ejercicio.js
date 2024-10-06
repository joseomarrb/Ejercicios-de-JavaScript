/**Encontrar posiciones de números pares
 * 
Escribir una función llamada posiciones que reciba un arreglo de números
 y retorne un nuevo arreglo con las posiciones donde se encuentran números pares. */

function posiciones(array) {
    const paresPosiciones = array
    .map((num, index) => num % 2 === 0 ? index : -1)
    .filter( index => index !== -1);
    
    return paresPosiciones;
}

console.log(posiciones([1, 2, 3, 4, 5, 6, 14, 9, 22])) // [1, 3, 5]
console.log(posiciones([])) // []