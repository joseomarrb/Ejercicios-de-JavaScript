/**
 * Determinar si el número que teclea el usuario es primo o no. 
 * Recordar que un número primo es el que solo puede dividirse 
 * por si mismo y por la unidad.
 * 
 * Aclaraciones: Si el usuario telcea el 3: dirá que 3 es primo. 
 * Si telcea el 4 dirá que 4 no es primo.
 */

let numPrimo = parseInt(prompt("Inserta un número para saber si es primo o no:"));
let contador = 0;

while ( numPrimo ) {
    if (numPrimo < 0) {
        numPrimo = parseInt(prompt("Inserta un número mayor a cero:"));
    }

    for (let i = 1; i <= numPrimo; i++) {            
        if (numPrimo % i === 0) {
            contador++;
        }
    }

    if (contador === 2) {
        alert(`El ${numPrimo} ES PRIMO.`);
        break; 
    } else {
        alert(`El ${numPrimo} NO ES PRIMO. Ingresa otro número`);
    }
}