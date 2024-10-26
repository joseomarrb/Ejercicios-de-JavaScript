/**
 * Realiza un script que le pida al usuario que teclee la letra A 
 * (en mayúscula) y mientras no lo haga se lo vuelva a pedir. 
 * Usa un bulce do..while y la ventana alert para los mensajes
 * 
 * Aclaraciones: El usuario teclea b, el programa vuelve a pedirme 
 * que teclee una letra
 */

let teclearLetra = prompt("Inserta la letra A (en mayúscula), para salir del bucle:");

do {
    if (teclearLetra === "A") {
        alert("Terminó el programa.");
        break;
    } else {
        teclearLetra = prompt("Inserta la letra A (en mayúscula), para salir del bucle:")
    }
} while ( teclearLetra );