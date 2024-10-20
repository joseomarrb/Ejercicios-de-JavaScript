/**
 * En este ejercicio debes pedir dos números enteros y devolver
 * el cociente de dividir el primero entre el segundo, pero si este
 * es cero no debe hacer la división, sino lanzar un mensaje de error
 * 
 * Aclaraciones: Si se entran el número 8 y 2, debe resultar 4
 * Si se entran 4 y 0, dbe resultar en un mensaje de error.
 */

const num1 = parseInt(prompt("Insertar el primer número para saber el cociente:"));
const num2 = parseInt(prompt("Insertar el segundo número para saber el cociente:"));

if (num1 > 0 && num2 > 0) {
    alert(`El resultado de: ${num1} / ${num2} = ${num1 / num2}`)
} else {
    alert(`Hubo un error, los números deben ser mayores que 0.`)
}