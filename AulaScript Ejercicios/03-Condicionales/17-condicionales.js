/**
 * En este ejercicio el usuario entra la longitud de la base y el alto de un cuadrado. 
 * Si la base y el alto son idénticos la respuesta será "Es un cuadrado", si la base 
 * es mayor que el alto dira "Rectángulo horizontal" y en caso contrario dirá "Rectángulo vertical".
 * 
 * Aclaraciones: Si entro base es 10, alto es 5. Resultado rectángulo
 */

const base = parseInt(prompt("Ingresa la longitud de la base:"));
const alto = parseInt(prompt("Ingresa el alto:"));

if (base === alto) {
    alert("Es un cuadrado")
} else if( base > alto ){
    alert("Es un Rectángulo Horizontal");
} else {
    alert("Es un Rectángulo Vertical");
}