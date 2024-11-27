/**
 * Te propongo que crees una función para determinar el número de días de cada mes, 
 * por supuesto sin usar arrays con meses y días, si no usando el objeto Date. 
 * La función recibe como argumento una fecha.
 * 
 * Aclaraciones: Así por ejemplo diasMes("2000/2/1"), es el mes de febrero de un año bisiesto, 
 * luego dará como resultado 29. diasMes("2023/1/1") dará 31.
 */

function diasMes(fechaStr) {
    // Crear un objeto Date a partir de la cadena de fecha
    let fecha = new Date(fechaStr);
    
    // Obtener el año y el mes de la fecha dada
    let año = fecha.getFullYear();
    let mes = fecha.getMonth();

    // Crear una nueva fecha para el primer día del mes siguiente
    let primerDiaMesSiguiente = new Date(año, mes + 1, 1);

    // Restar un día para obtener el último día del mes actual
    primerDiaMesSiguiente.setDate(0);

    // Obtener el día del mes, que será el número total de días en ese mes
    let dias = primerDiaMesSiguiente.getDate();

    return dias;
}

// Ejemplos de uso:
console.log(diasMes("2000/2/1")); // Debería devolver 29 (febrero de un año bisiesto)
console.log(diasMes("2023/1/1")); // Debería devolver 31 (enero de 2023)
