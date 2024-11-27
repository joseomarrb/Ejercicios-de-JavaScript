/**
 * En este ejercicio debes añadir un nuevo método al objeto Date, se llamara getWeek 
 * y debe devolver el número de semana para una fecha determinada.
 * 
 * Según la norma ISO 8601 las semana comienzan en Lunes y si  el año comienza antes 
 * del viernes esa es la semana 1 del año, en caso contrario esa es la última semana 
 * del año anterior. Si el año termina antes del jueves esa última semana se cuenta 
 * como semana 1 del año siguiente. 
 * 
 * Aclaraciones: Si defino el objeto fecha = new Date('2023/3/27') entonces 
 * fecha.getWeek() me dará el número de la semana actual que es 13.
 * Para el 1 de enero de 2023 que fue domingo obtenemos que el num de semana es 52
 */

// Añadimos el método getWeek al prototipo de Date
Date.prototype.getWeek = function() {
    // Copiar la fecha actual para no modificarla
    let fecha = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    // Establecer el día de la semana (lunes es 1, domingo es 0)
    let dayNum = fecha.getUTCDay() || 7;
    fecha.setUTCDate(fecha.getUTCDate() + 4 - dayNum);
    // Año inicial para el cálculo de la semana
    let yearStart = new Date(Date.UTC(fecha.getUTCFullYear(), 0, 1));
    // Calcular el número de la semana
    let weekNum = Math.ceil((((fecha - yearStart) / 86400000) + 1) / 7);
    return weekNum;
}

// Ejemplos de uso:
let fecha1 = new Date('2023-03-27');
console.log(fecha1.getWeek()); // Debería devolver 13

let fecha2 = new Date('2023-01-01');
console.log(fecha2.getWeek()); // Debería devolver 52
