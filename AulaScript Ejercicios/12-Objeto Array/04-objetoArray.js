/**
 * Crea un array de al menos 10 elementos para guardar números enteros. 
 * Usa un método para obtener la suma de los números pares y la de los números impares.
 * 
 * Aclaraciones: Se trata de reducir el array a un número obtenido como suma de los pares 
 * en un caso y delos impares en el otro.
 */

let array = new Array(10, 65, 81, 64, 26, 54, 89, 35, 48, 74, 12);
let impares = 0, pares = 0;
array.forEach( num => {
    num % 2 === 0 ? pares += num : impares += num
});

