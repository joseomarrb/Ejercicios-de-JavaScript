/**
 * Usando un bucle while escribir un script que pida un valor entero 
 * y cree una lista con los números desde el 0 al valor tecleado. 
 * Luego deberá sacar esa lista con un alert. Los números se separarán por comas. 
 * 
 * Aclaraciones: Si le doy el número 5 pues deberá contar 0,1,2,3,4,5 
 */

let numero = parseInt(prompt("Ingresa el número que desees ver cuantos número tiene antes:"));
let contador = 0;
let listaNums = "";

while (contador <= numero) {
    listaNums += `${contador}, `
    contador++;
}

alert("Los números son " + listaNums);