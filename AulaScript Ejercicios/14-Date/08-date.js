/**
 * Esta función debe determinar si el año de una determinada fecha es bisiesto o no. 
 * Recuerda un año es bisiesto si es múltiplo de 4, excepto el primer año del siglo 
 * (1500, 1600...) que solo lo será es divisible por 400
 * 
 * Aclaraciones: Por ejemplo esBisiesto('1984/1/1') devolve´r que ('a', ['w','e','r','i']) 
 * devolverá que si lo es. Igualmente esBisiesto('1600/1/1') pero para esBisiesto('1800/1/1') 
 * dirá que no es bisiesto
 */

function esBisiesto(fechaStr) {
    // Convertir la cadena de fecha en un objeto Date
    let fecha = new Date(fechaStr);
    
    // Obtener el año de la fecha
    let año = fecha.getFullYear();
    
    // Regla para determinar si un año es bisiesto
    if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
        return true; // Es un año bisiesto
    } else {
        return false; // No es un año bisiesto
    }
}

// Ejemplos de uso:
console.log(esBisiesto('1984/1/1')); // Debería devolver true (1984 es un año bisiesto)
console.log(esBisiesto('1600/1/1')); // Debería devolver true (1600 es un año bisiesto)
console.log(esBisiesto('1800/1/1')); // Debería devolver false (1800 no es un año bisiesto)
