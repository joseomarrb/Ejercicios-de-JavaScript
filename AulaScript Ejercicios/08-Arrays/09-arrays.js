/**
 * Un servicio de atención al cliente tiene establecido turnos semanales para sus 
 * empleados de manera que cada día de la semana se encarga del servicio  una persona: 
 * lunes - María, Martes - Luis, Miércoles - Antonia, Jueves - Pedro, Viernes - Marisa.
 * 
 * Usa un array para almacenar los datos del servicio. En este array cada elemento 
 * será un par día - nombre.
 * 
 * Crea una función que responda con el nombre de la persona encargada del servicio 
 * sabiendo el día. Si el día no existe deberá decir que no hay servicio. Los nombres 
 * de los días deben ir en minúsculas.
 * 
 * Aclaraciones: Si le pido servicio('Lunes') me debería decir 
 * "Este día se encarga María" y si le pido servico(Miércoles") me daría Antonia.
 */

const array = ["María", "Luis", "Antonia", "Pedro", "Marisa"];

function servicio(dia) {
    switch (dia) {
        case "lunes":
            return `Se encarga ${array[0]}.`;
        case "martes":
            return `Se encarga ${array[1]}.`;
        case "miércoles":
            return `Se encarga ${array[2]}.`;
        case "jueves":
            return `Se encarga ${array[3]}.`;
        case "viernes":
            return `Se encarga ${array[4]}.`;
        default:
            return "Solo laboramos Lunes a Viernes (escribir el día correctamente)";
    }
}

console.log(servicio('miércoles'))