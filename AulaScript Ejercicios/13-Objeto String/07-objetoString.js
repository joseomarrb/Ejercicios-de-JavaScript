/**
 * Diseña una función que sea capaz de encontrar los caracteres comunes entre 
 * dos palabras. La función recibe como argumentos dos palabras o frases y 
 * devuelve una cadena con los caracteres que haya en común entre ambas ordenados de menor a mayor.
 * Se desechan los espacios en blanco.
 * No se tiene en cuenta el caso (mayúsuclas o minúsculas)
 * 
 * Aclaraciones: Por ejemplo si llamamos a la función comunes("Ciudad", "Cuidar") 
 * el resultado será "acdiu"
 */

function comunes(firstWord, secondWord) {
    let orden = firstWord.toLowerCase().split('').sort().join('')
    let result = '';
    for (let i = 0; i < orden.length; i++) {
        if (secondWord.includes(orden[i])) {
            result += orden[i]
        }
    }
    return result;
}
console.log(comunes("ciudad", "cuidar"));