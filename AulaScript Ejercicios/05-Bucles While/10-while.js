/**
 * Un script pedirá al usuario que vaya tecleando números de manera repetida. 
 * cuando pulse 0, el programa muestra "La suma es " seguido de la suma de los 
 * números. Si esta suma es par el programa se repite y si es impar el programa acaba.
 * 
 * Aclaraciones: Si tecleo 2,6,2, 0 Me dirá suma "10" y volverá a pedir otra serie de 
 * números, si tecleo 2,6,3 Me dirá "suma 11" y acabará.
 */

let numeros = parseInt(prompt("Programa para insertar números de manera repetida.\nInserta cualquier número diferente a 0 para iniciar:"));
let suma = 0;

while ( numeros  ) {
    numeros = parseInt(prompt("Ingresa el número aquí.\nPara salir presiona 0:"));
    suma += numeros;
    if ( numeros === 0) {
        if ( suma % 2 === 0 ) {
            alert(`La suma de los números es: ${suma} ES PAR.`);
            numeros = parseInt(prompt("Ingresa otro número aquí:"));
            suma += numeros;
        } else {
            alert(`La suma de los números es: ${suma} ES IMPAR.`);
            break;
        }
    }
}