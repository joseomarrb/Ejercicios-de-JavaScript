/**
 * Un tienda vende monitores, teclados y ratones. Los precios se almacenan en 
 * una estructura array conde cada elemento es un par producto - precio.
 * 
 * Diseña una función que reciba como argumento el nombre de un producto (minúscula) 
 * y devuelva su precio.
 * 
 * Aclaraciones: Si la lsita de precios es monitor: 200€, 
 * teclado: 20€ ratón: 10€, al pedri precio('monitor') me devolcerá 200.
 */

const matriz = [
    ['monitor', 200],
    ['teclado', 20],
    ['ratón', 10]
];

function precio(producto) {
    for (const fila of matriz) {
        for (const columna of fila) {
            if (columna === producto) {
                return fila[1]
            }
        }
    }
}

console.log(precio('ratón'));