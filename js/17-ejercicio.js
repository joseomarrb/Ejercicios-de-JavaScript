/**Capitalizar cada palabra
 * 
Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra: */

function capitalizar(string) {

    return string
    .split(" ")
    .map( palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(" ") 

}

console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("esto es real chat")) // "Make It Real"
console.log(capitalizar("")) // ""

let arr = ["Joa", "Pablo", "Mario", "Mariana", "Jesús"];
let nuevoArr = arr.join(" - ")
console.log(nuevoArr)