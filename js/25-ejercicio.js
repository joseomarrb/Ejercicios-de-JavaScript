/**Encontrar palabras que terminan en "s"
 * 
Escribir una función llamada terminanConS que reciba un arreglo
de strings y retorne un nuevo arreglo con todas las palabras
que terminan con "s" (mayúscula o minúscula). */

function terminanConS(array) {

    const nuevoArr = array
    .filter( palabra => palabra.toLowerCase().endsWith("s"));

    return nuevoArr;
}

console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens", "saludos", "soy"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []