/**Número de aes (letra "a")
Escribir una función llamada numeroDeAes que reciba un string y retorne
el número de veces que aparece la letra "a":

*/

function numeroDeAes(string) {
    let contadorA = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "a") {
            contadorA++;
        }
    }
    return contadorA;
}

console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0 
console.log(numeroDeAes("el nene la amenaza")) // 0 