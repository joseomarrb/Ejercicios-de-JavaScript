/**
 * Este ejemplo debe pedir al usuario un  número entero y, 
 * mediante sucesivas divisiones por 10 debe escribir los 
 * digitos que lo forman de menor a mayor orden (de unidades 
 * hacia arriba) en una cadena separados por un espacio.
 * 
 * Aclaraciones: Si escribo 126 deberá responder  "Dígitos del número: 6 2 1"
 * No vale usar cadenas (strings) se debe usar la división como dice el enunciado.
 */

let entero = parseInt(prompt("Ingrese un número entero aquí:"));
let resultado = "";

do {
    resultado += (entero % 10) + " ";
    entero = Math.floor(entero / 10);
    
} while ( entero );
alert("Dígitos del número: " + resultado.trim());