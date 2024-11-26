/**
 * En este ejercicio debes crear una función que reciba como argumento 
 * un objeto fecha y devuelva un objeto con tres campos o propiedades: 
 * Un entero dia para el día del mes,
 * 
 * Un string Sem para el nombre día de la semana (castellano)
 * Un string mes: para el nombre del mes (castellano),
 * Un entero año: para el año con 4 dígitos
 * 
 * Los nombres de día y mes deben comenzar con mayúsculas.
 * 
 * Bueno una condición, intentad no utilizar arrays.
 * 
 * Aclaraciones: Es decir si llamo al script con la fecha correspondiente al 27/03/202 
 * me debe devolver el objeto {dia: 23, sem: 'Lunes', mes:'Marzo', año: 2023}  
 */

function darFecha(fecha) {
    const diasSemana = {
        0 : 'Lunes', 1 : 'Martes', 2 : 'Miércoles', 3 : 'Jueves', 4 : 'Viernes',
        5 : 'Sabado', 6 : 'Domingo'
    };
    const meses = {
        0 : 'Enero', 1 : 'Febrero', 2 : 'Marzo', 3 : 'Abril', 4 : 'Mayo',
        5 : 'Junio', 6 : 'Julio', 7 : 'Agosto', 8 : 'Septiembre', 9 : 'Octubre',
        10 : 'Noviembre', 11 : 'Diciembre'
    }

    return { 'dia' : fecha.getDate(), 'sem' : diasSemana[fecha.getDay()],
            'mes' : meses[fecha.getMonth()], 'año' : fecha.getFullYear(), };
};
const fecha = new Date(2004, 9, 10);
console.log(darFecha(fecha));