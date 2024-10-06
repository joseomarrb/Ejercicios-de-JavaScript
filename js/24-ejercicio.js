/**Encontrar palabras que empiecen por "a"
 * 
Escribir una función llamada empiezanConA que reciba un arreglo de strings
y retorne un nuevo arreglo con todas las palabras que empiecen
por "a" (mayúscula o minúscula). */ 

function empiezanConA(array) {

    const nuevoArr = array
    .filter( palabra => palabra.toLowerCase().charAt().includes("a"));

    return nuevoArr
}

console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA(["albeta", "Adinerado", "hola", "ana"])) // []
console.log(empiezanConA([])) // []