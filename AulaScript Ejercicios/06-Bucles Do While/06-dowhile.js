/**
 * En este script se trata de calcular el máximo común divisor de 
 * dos números. El algorimto es simple: dividimos el primer por el 
 * segundo. si el resto es cero este segundo es el mcm. Si no se 
 * desecha el primero y se repite el proceso con el segundo y el resto. 
 * Así mientras el resto no sea 0
 * 
 * Aclaraciones: Si tecleo 20 y luego 10, el mcd es 10. Si tecleo 4 y 
 * luego 20 el mcd será 4. Si tecleo 20 y 8 el mcd es 4.
 */

let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));

do {
    let resto = num1 % num2;
    if (!resto) {
        alert(`El número ${num2} es el MCD`);
        break;
    } else {
        num1 = num2;
        num2 = resto;
    }

} while (num2 !== 0);

