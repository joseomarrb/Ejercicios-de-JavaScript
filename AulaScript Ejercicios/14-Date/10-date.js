/**
 * En este ejercicio debes añadir un nuevo método al objeto Date, se llamara getWeek 
 * y debe devolver el número de semana para una fecha determinada.
 * 
 * Según la norma ISO 8601 las semana comienzan en Lunes y si  el año comienza antes 
 * del viernes esa es la semana 1 del año, en caso contrario esa es la última semana 
 * del año anterior. Si el año termina antes del jueves esa última semana se cuenta 
 * como semana 1 del año siguiente. 
 * 
 * Aclaraciones: Si defino el objeto fecha = new Date('2023/3/27') entonces 
 * fecha.getWeek() me dará el número de la semana actual que es 13.
 * Para el 1 de enero de 2023 que fue domingo obtenemos que el num de semana es 52
 */