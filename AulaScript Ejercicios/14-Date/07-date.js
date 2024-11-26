/**
 * Escribe una función que determine cual de las dos horas que se le 
 * pasa como argumento es menor.
 * 
 * Se supone que ambos tiempos son horas de un mismo día y la solución 
 * se debe hacer usando el objeto Date.
 * 
 * Aclaraciones: Por ejemplo menorHora("12:20:00", "11:10:00") 
 * debiera de decir que la segunda hora es menor que la primera. 
 */

function menorHora(date1, date2) {
    return date1 < date2 ? 
            `La primera hora es menor que la segunda` :
            `La segunda hora es menor que la primera`;
};

let fecha1 = new Date();
fecha1.setHours(12, 20, 0);

let fecha2 = new Date();
fecha2.setHours(11, 10, 0);

console.log(menorHora(fecha1, fecha2));