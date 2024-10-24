/**
 * Este script le pide al usuario que vaya tecleando números una y 
 * otra vez, pero solo números pares, en caso de que teclee un número 
 * impar el programa acabará y dirá la cantidad de números pares ingresados 
 * (el 0 cuenta como par).
 * 
 * Aclaraciones: Muestra Si escribo 2,8,12,1 el script me dirá "Ha escrito 3 números pares")
 */

let teclearNum = parseInt(prompt("Programa para insertar números de manera repetida, pero solo números pares.\nInserta cualquier número diferente a 0 para iniciar:"));

let cantidadPares = 0;

while ( teclearNum ) {
    teclearNum = parseInt(prompt("Inserta números aquí:"));
    if (teclearNum % 2 === 0) {
        cantidadPares++;
    } else {
        alert(`Has ingresado ${cantidadPares} números pares ☺`);
        break;
    }
}