/**
 * En un tramo de un rally los conductores no deben ir ni demasiado rápido
 * ni demasiado lentos. Este ejercicio debe tomar la longitud del tramo en
 * kilometros y el tiempo empleado, si la velocidad está entre 40 y 60 km/h
 * el conductor pasa la prueba en caso contrario es descalificado.
 * 
 * Aclaraciones: Ejemplo si recorre 100 km en 4 horas, ha ido a una velocidad
 * de 100/4 que son 25km/h. Estaría descalificado.
 */

const kilometros = parseInt(prompt("Introduce el número de kilometros recorridos:"));
const horas = parseInt(prompt("Introduce las horas que recorriste:"));

const resultado = kilometros / horas;

if (resultado >= 40 && resultado <= 60) {
    alert(`Recorriste exactamente ${resultado}km/h, pasaste la prueba ☺.`);
} else {
    alert(`Recorriste exactamente ${resultado}km/h, no pasaste intentalo de nuevo.`);
}

