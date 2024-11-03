/**
 * Escribe una función que determina si la letra que se le pasa como argumento 
 * se encuentra contenida dentro de un array de letras que se le pasa como segundo argumento.
 * Se trata de resolverlo sin usar métodos del objeto array, solo el dato tipo array.
 * 
 * Aclaraciones: existeEn('a', ['w','e','r','i']) devolverá false porque la letra 'a' no existe en el array
 */

const existeEn = (letra, array) => {
    let resultado = false;
    for (let i = 0; i < array.length; i++) {
        if (letra === array[i]) {
            resultado = true;
        }
    }
    return resultado;
}

console.log(existeEn('x', ['w','a','x','i']));