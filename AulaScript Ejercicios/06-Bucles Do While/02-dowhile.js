/**
 * Este script usará un bucle do while para determinar si 
 * un número es primo o no. El numero tecleado deberá estar 
 * entre 0 y 100. Si es primo lo mostrará en una ventana alert.
 * 
 * Aclaraciones: Recuerda que un número primo es el que es divisible 
 * por 1 y por sí mismo: 7 es primo (solo es deivisible entre 1 y 7), 
 * 8 no es primo (puede dividirse entre 1, 2, 4 y 8)).

 * Si escribo 0 o 100 el programa me seguirá pidiendo un número
 */

let teclearNum = parseInt(prompt("Inserta un número para determinar si es primo o no. \nEl numero tecleado deberá estar entre 0 y 100."));
let contador = 0;

do {
    for (let divisor = 0; divisor <= teclearNum; divisor++) {
        if (teclearNum % divisor === 0) {
            contador++;
        }
    }
    if (contador === 2) {
        alert(`Es un número primo ${teclearNum}`);
        break;
    } 
    

} while (teclearNum >= 0 || teclearNum <= 100);