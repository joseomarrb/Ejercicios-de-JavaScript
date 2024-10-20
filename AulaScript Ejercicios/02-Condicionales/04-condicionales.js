/**
 * Este script pide al usuario que teclee una letra entre A, B, C, D.
 * Si pulsa la letra A en mayúsucla o en minúscula le dará el mensaje
 * de que ha acertado, en caso contrario le dirá que se equivocó.
 * 
 * Aclaraciones: Si pulsa C le dará mensaj de error.
 */

const insertarLetra = prompt("Inserta una letra entre A, B, C, D:");

if (insertarLetra === "A" || insertarLetra === "a") {
    alert("Enhorabuena!, has acertado ☺.");
} else {
    alert("Has fallado, intentalo de nuevo.")
}