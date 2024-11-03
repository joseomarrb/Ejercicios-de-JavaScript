/**
 * En este script deberás crear un array para guardar los nombres de los días de la semana, 
 * empezando por 0 para el domingo. Para comprobar el funcionamiento pide al usuario un número 
 * entre 0 y 6 y devuelve el nombre del día. Se supone que el dato tecleado estará entre 0 y 6
 * 
 * Aclaraciones: Si tecleo el número 4 me deberá decir que el día de la semana es jueves
 */

const array = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const num = parseInt(prompt("Teclea un número entre 0 y 6"));

function mostrarSeleccion(num) {
    return num >= 0 && num <= 6 ? 
            alert(`Dia seleccionado: ${array[num]}`) 
            : alert("Debes insertar un número de 0 a 6");
}

mostrarSeleccion(num);