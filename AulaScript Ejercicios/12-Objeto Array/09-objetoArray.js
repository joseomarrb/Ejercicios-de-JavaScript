/**
 * En este ejercicio partimos de dos arrays: artículos que contiene nombres de 
 * artículos y precios que contiene lo precios correspondientes de cada artículo. 
 * Se trata de crear una función precio(art) que lleva como argumento el nombre de 
 * un artículo y devuelve el precio correspondiente. si el artículo no existe devolverá -1.
 * 
 * Aclaraciones: Una lista podría ser Naranjas, Peras, Bananas y la de precios sería 
 * 10, 12, 15. La llamada precios('Peras') deberá devolver 12 para el precio de las peras..
 */

let articulosNombre = new Array('Naranjas', 'Peras', 'Bananas');
let articulosPrecio = new Array(10, 12, 15);

function precio(nombre) {
    let resultado = articulosNombre.findIndex( name => name === nombre);
    return resultado >= 0 ? articulosPrecio[resultado] : resultado
}

console.log(precio('Peras'));