/**
 * En este script vas a crear un menu con tres opciones: e
 * scribir, leer, salir. El usuario elegirá una opción y en 
 * un alert se le indicará la opción elegida. El programa 
 * vuelve a mostrar el menu y se repite el proceso. El script 
 * acabará cuando se pulse la opción de salir.
 * 
 * Aclaraciones: El menu tiene 3 opciones, elijo la opción 2, 
 * respuesta "has elegido leer".
 */

let menu = parseInt(prompt("Insertar el número de la opción que deseas: \n1-Escribir \n2-Leer \n3-Salir."));

do {
    if (menu === 1) {
        alert("Presionas 1, Haz elegido Escribir");
        menu = parseInt(prompt("Insertar el número de la opción que deseas: \n1-Escribir \n2-Leer \n3-Salir."));
    } else if (menu === 2) {
        alert("Presionas 2, Haz elegido Leer");
        menu = parseInt(prompt("Insertar el número de la opción que deseas: \n1-Escribir \n2-Leer \n3-Salir."));
    } else if (menu === 3) {
        alert("Presionas 3, el programa finalizó");
        break;
    } else {
        menu = parseInt(prompt("Insertar el número de la opción que deseas: \n1-Escribir \n2-Leer \n3-Salir."));
    }
} while ( menu );