/**
 * Vamos a por el tradicional ejercicio donde el ordenador te va 
 * a saludar con un buenos días, buenas tardes o buenas noches según 
 * la hora del día. De 6 de la mañana 12 del medio día serán buenos días,  
 * a partir de las 12 hasta las 20h serán buensa tardes y a partir de las 20h 
 * hasta las 6 de la madrugada serán buenas noches.
 * 
 * Aclaraciones: Por ejemplo entro en mi página a las 10am, la página me mostraría 
 * "Buenos días", pero si entro a las 14:30 me dirá Buenas tardes y si llego a las 
 * 11 de la noche a la 1 de la madrugada me dirá Buenas noches. 
 */

const DATE = new Date();
const hora = DATE.getHours();

function saludarSegunHora(hora) {
    if (hora >= 6 && hora <= 11) {
        return `Buenos Días son las ${hora} AM`
    } else if (hora >= 12 && hora <= 20) {
        return `Buenos Tardes son las ${hora} PM`
    } else if (hora >= 21 && hora < 6) {
        return `Buenos Noches son las ${hora}`
    }
};

console.log(saludarSegunHora(hora));