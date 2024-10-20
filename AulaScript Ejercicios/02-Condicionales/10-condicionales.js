/**
 * Crea un programa que pida la nota de un estudiante en los tres trimestres del curso 
 * y calcule la nota promedio. El resultado que dará será suspenso si la media es menor 
 * de 5, aprobado si está entre 5 y 7 y  Notable por encima de 7.
 * 
 * Aclaraciones: Para las notas 6, 8, 10 la media es 8 por tanto se califica como Notable
 */

const primerMes = parseInt(prompt("Introduce tu nota en el primer mes del 0 al 10:"));
const segundoMes = parseInt(prompt("Introduce tu nota en el segundo mes del 0 al 10:"));
const tercerMes = parseInt(prompt("Introduce tu nota en el tercer mes del 0 al 10:"));

const promedio = primerMes + segundoMes + tercerMes / 3;

if (promedio > 7) {
    alert("Notable")
} else if (promedio > 5 && promedio < 7) {
    alert("Aprobado")
} else {
    alert("Aprobado")
}

