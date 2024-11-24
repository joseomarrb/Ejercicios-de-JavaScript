/**
 * Escribe una función que reciba como argumento una frase y devuelva la 
 * misma frase pero con la inicial de cada palabra en mayúsculas
 * 
 * Aclaraciones: Por ejemplo cambInicial("pero no tengo hambre ") debería devolver 
 * la frase Pero No Tengo Hambre
 */

function cambInicial(frase){
    let array = frase.split(' ');
    let result = [];
    for (const word of array) {
        result.push(word.charAt().toUpperCase() + word.slice(1, Infinity))
    }
    return result.join(' ')
};

console.log(cambInicial("pero no tengo hambre"));