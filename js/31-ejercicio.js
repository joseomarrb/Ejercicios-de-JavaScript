/** Distancia entre dos strings
 * 
 * Escribir una función llamada distancia que reciba dos strings y retorne
 * el número de caracteres diferentes (comparando posición por posición).

Nota: Puedes asumir que los strings siempre tienen la misma longitud.
Sin embargo, si quieres agregarle más dificultad puedes pensar cómo
solucionarlo si un string es más largo que el otro (la diferencia entre
las longitudes agregaría al resultado).
 */

function distancia(string1, string2) {
    let count = 0;
    for (let i = 0; i < string1.length && i < string2.length; i++) {
        string1[i] !== string2[i] ? count++ : count
    }
    return count;
}

console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("solazo", "tolita")) // 1
console.log(distancia("carro", "correr")) // 
