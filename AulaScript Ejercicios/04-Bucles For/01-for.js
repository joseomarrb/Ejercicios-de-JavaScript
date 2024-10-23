/**
 * Usando un bucle for escribir un script que pida un valor entero 
 * y muestre en pantalla una lista de números desde el 0 al valor 
 * tecleado. Los números se separarán por comas.
 * 
 * Aclaraciones: Si el usuario entra por teclado el número 5 el script 
 * devolverá la secuencia  0, 1, 2, 3, 4, 5  
 */

const numero = parseInt(prompt("Ingresa un número entero aquí: ☺"));
let salida = "Estos son los números: ";

for (let i = 0; i <= numero; i++) {
    salida += `${i}, `; 
}

alert(salida);