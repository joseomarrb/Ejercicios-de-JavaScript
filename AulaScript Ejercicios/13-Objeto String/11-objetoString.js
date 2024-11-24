/**
 * Debes crear una función que reciba tres argumentos: una frase y dos palabras, 
 * como resultado la función insertará la segunda palabra detrás de la primera 
 * con un espacio por delante y por detrás. Si no se encuentra la palabra después 
 * de la que insertar se devuelve la frase original
 * 
 * Aclaraciones: Ppor ejemplo insertar("nombre:,edad 30:", "nombre", "Juan"), 
 * el resultado será la cadena"nombre: Juan, edad:30"
 */

function insertar(frase, firstWord, secondWord) {
    if ( frase.includes(firstWord) ){
        return frase.replace(firstWord, `${firstWord} ${secondWord}`)
    } else {
        return frase;
    }
}

console.log(insertar("nombre, edad: 30", "nombre", "Juan"));
