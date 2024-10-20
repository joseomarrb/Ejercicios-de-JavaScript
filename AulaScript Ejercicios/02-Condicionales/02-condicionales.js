/**
 * Un programa que pida un número y diga si es positivo o negativo. 
 * El cero se considera positivo.
 * 
 * Aclaraciones: Si num1 es 2 debe decir que num1 es positivo
 */

const insertarNum = parseInt(prompt("Insertar número para saber si es POSITIVO o NEGATIVO:"));

if (insertarNum >= 0) {
    alert(`El número ${insertarNum} es POSITIVO.`)
} else {
    alert(`El número ${insertarNum} es NEGATIVO.`)
}

