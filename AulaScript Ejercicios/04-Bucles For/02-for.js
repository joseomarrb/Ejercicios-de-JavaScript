/**
 * Se trata de que dado un número entero el script muestre una cuenta atrás, 
 * es decir, una lista de numeros separados por comas desde el número tecleado 
 * hasta el 0.
 * 
 * Aclaraciones: Si tecle o número 5 deberá mostarar 5,4,3,2,1.
 */

const numUsuario = parseInt(prompt("Ingresa un número entero aquí: ☺"));
let salida = "Cuenta atrás: ";

for (let i = numUsuario; i >= 0; i--) {
    salida += `${i}, `
}

alert(salida);