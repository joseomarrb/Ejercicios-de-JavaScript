/**
 * En este ejercicio el usuario te dará su fecha de nacimiento y 
 * debes escribir la función que calcula el dia de la semana en que nació. 
 * Se supone que el usuario introducirá los datos numéricos correctamente y en una fecha real.
 * 
 * Aclaraciones: Por ejemplo si la fecha de nacimiento es el 3 de febrero de 1990 
 * (3, 2, 1990) la función debe decirtes que nació en Sábado
 */

function fechaNacimiento(date){
    const DATE = new Date(date);
    return DATE;
}

console.log(fechaNacimiento('2,3,1990'));