/**
 * En este script se le pide al usuario que teclee dos números, 
 * el script mostrará la suma y pedirá al usuario si queire repetir. 
 * Si teclea S repite y si teclea N el programa sale. No debe 
 * aceptar otras teclas.
 * 
 * Aclaraciones: Por ejemplo si tecleo 3 despues 9 me dirá que la suma 
 * es 12, y luego me preguntará si quiero repetir.
 */

let num1 = parseInt(prompt("Ingresa el primer número aquí:"));
let num2 = parseInt(prompt("Ingresa el segundo número aquí:"));
let respuesta = num1 + num2;

do {
    let seguir = prompt(`El resultado es ${respuesta} Si teclea S repite y si teclea N el programa sale:`);

    if (seguir === "S") {
        num1 = parseInt(prompt("Ingresa el primer número aquí:"));
        num2 = parseInt(prompt("Ingresa el segundo número aquí:"));
        respuesta = num1 + num2;
        alert("El resultado es " + respuesta);
    }

    if (seguir === "N") {
        alert("Presionaste N, el programa ha finalizado.");
        break;
    }

} while ( respuesta );