/**
 * Para comenzar vamos a crear un objeto sencillo que se usa para guardar i
 * nformación sobre las calificaciones de un alumno. El curso contiene tres 
 * aterias: Ingles, programación y HTML, y el objeto contendrá el nombre del 
 * alumno y la calificación en cada una de ellas. El script imprimirá el nombre 
 * y la media de sus calificaciones
 * 
 * Aclaraciones: Por ejemplo, guardar las calificaciones de un alumno de nombre 
 * Juan, Inglés: 9, programacion: 8, HTML: 7. Sacará Nota media de Juan 8
 */

const objeto = {
    nombre: "JUAN",
    ingles: 9,
    programacion: 8,
    HTML: 7,
    media(){
        return (this.ingles + this.HTML + this.programacion) / 3
    }
};

console.log(objeto.media());