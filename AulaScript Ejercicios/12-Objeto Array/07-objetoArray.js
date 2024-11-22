/**
 * Tenemos dos listas de asistentes a dos cursos: html y css. Queremos obtener 
 * una lsita de los asistentes a ambos cursos. La lista estará ordenada.
 * 
 * Aclaraciones: Por ejemplo html = ['Pedro','Juan','Ana'], 
 * y css=['Luis','Juan', 'Ana','María'] la lista obtenida sería ['Juan', 'Ana'].
 */

let html = new Array('Pedro', 'Juan', 'Ana');
let css = new Array('Luis', 'Juan', 'Ana', 'María');

[...html, ...css].filter( name => name );