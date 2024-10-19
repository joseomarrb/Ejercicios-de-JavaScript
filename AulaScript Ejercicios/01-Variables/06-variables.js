/**
 * Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.

 * Recuerda una hora son 60 minutos y cada minuto son 60 segundos.

 * Aclaraciones:
 * horas : 2
 * minutos 30
 * Resultado 2*60*60 + 30*60 = 9000 segundos
 */

const horas = parseInt(prompt("Ingresa el número de horas para convertir a segundos:"));
const minutos = parseInt(prompt("Ingresa el número de minutos para convertir a segundos:"));

let resultado = alert(`${horas * 60 * 60 + minutos * 60} segundos`);