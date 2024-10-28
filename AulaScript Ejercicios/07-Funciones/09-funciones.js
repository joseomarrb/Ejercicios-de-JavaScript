/**
 * En esta función se trata de convertir notas a calificaciones 
 * literales de manera que menos de 5 es suspenso, un 5 es aprobado,
 *  el 6 es bine, el 7 y el 8 son notable, el 9 es sobresaliente y 
 * el 10 es matrícula.
 * 
 * Aclaraciones: Por ejemplo si pido miCalificacion(5) la función me dirá 
 * tu calificación es Aprobado
 */

function miCalificacion(num) {
    if ( num === 10) {
        return "SOBRESALIENTE";
    } else if ( num === 9) {
        return "APROBADO";
    } else if ( num >= 7 && num <= 8) {
        return "NOTABLE";
    } else if ( num === 5) {
        return "APROBADO";
    } else if ( num < 5) {
        return "SUSPENSO";
    } else {
        return "INSERTE UNA NOTA DEL 1 AL 10"; 
    }
}

console.log(miCalificacion(50));