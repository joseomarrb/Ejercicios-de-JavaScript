/**
 * En este ejemplo el usuario tecleará dos números. 
 * Debe devvolver la diferencia entre el mayor y el menor.
 * 
 * Aclaraciones: Si el usuario entre el 5 y el 8, el programa devolverá 3 (8 - 5)
 */

const num1 = parseInt(prompt("Insertar el primer número para ver la diferencia:"));
const num2 = parseInt(prompt("Insertar el segundo número para ver la diferencia:"));

if (num1 >= num2) {
    alert(`La diferencia entre ${num1} y ${num2} es: ${num1 - num2}`)
} else {
    alert(`La diferencia entre ${num2} y ${num1} es: ${num2 - num1}`)
}
