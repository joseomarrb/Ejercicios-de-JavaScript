/**
 * Crea un objeto Array con los días laborables de la semana (Lunes a Viernes) 
 * y utiliza un método del objeto para recorrer el array y convertir cada elemento 
 * de ese array a mayúsculas. sa console.table para ver el resultado.
 * 
 * Aclaraciones: No se trata de usar un bucle, debes usar un método del objeto Array.
 * 
 * No debes copiar el array en otro nuevo.
 * 
 * Los objetos string tienen el método toUpperCase para cambiar a mayúsculas
 */

let array = new Array();
array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
array.forEach( (day, ind, arr) => {
    arr[ind] = day.toUpperCase();
})
console.table(array);
