/**
 * Escribir un script usando el bucle do while para pedir 
 * que el usuario escriba dos números. Si el primero es mayor 
 * que el segundo el programa volverá a pedir que se escriban 
 * los números. Si el primero es menor o igual que el segundo 
 * el programa acaba y dice "Numeros en orden creciente".
 * 
 * Aclaraciones: Si tecleo pimero un 12 y luego un 9, volverá a 
 * pedirme que escriba los datos. Si escribo un 12 y luego un 20 
 * me dirá "Numeros ordenados"
 */

let insertarNum = prompt("A continuación tendrás que insertar 2 números enteros:");

do {
    let num1 = parseInt(prompt("Ingresa el primer número aquí:"));
    let num2 = parseInt(prompt("Ingresa el segundo número aquí:"));

    if (num1 > num2) {
        num1 = parseInt(prompt("Ingresa el primer número aquí nuevamente:"));
        num2 = parseInt(prompt("Ingresa el segundo número aquí nuevamente:"));
    }

    if (num1 <= num2) {
        alert("Número en orden creciente, programa finzalizado ☺");
        break;
    }

} while ( insertarNum );