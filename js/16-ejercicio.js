/**Capitalizar palabra
 * 
Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra: */

function capitalizar(string) {
    return string.charAt().toUpperCase() + string.slice(1)
    
}
    
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("si o no Marino?")) // "Hola mundo"
console.log(capitalizar("")) // "