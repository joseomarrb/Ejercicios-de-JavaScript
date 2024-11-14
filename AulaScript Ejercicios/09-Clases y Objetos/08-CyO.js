/**
 * Para implementar un grupo de alumnos de un curso se crea una lista 
 * de objetos alumno. Cada objeto alumno se caracteriza por el nombre 
 * del alumno, su número de matrícula y su calificacion.
 * 
 * El objeto tiene un método para poner la calificación: calificar(nota).
 * 
 * Crea el script para implementar  un grupo de 4 alumnos.
 * 
 * Aclaraciones: Por ejemplo un alumno de nombre "Juan", número de matrícula 
 * 124 y su nota la pondríamos como alumno.calificar(5) para ponerle un 5.
 */

const listaAlumnos = [];
class Alumno{
    constructor ( nombre = "Anonimo", matricula = 0) {
        this.nombre = nombre;
        this.matricula = matricula;
        this.calificacion = 0;
    };

    calificar (nota = 0) {
        return this.calificacion = nota;
    };
};

const manuel = new Alumno("Manuel", 12553);
const juanito = new Alumno("Juanito", 17549);
const alicia = new Alumno("Alicia", 12778);
const sergio = new Alumno("Sergio", 14584);

sergio.calificar(8);
alicia.calificar(4);
manuel.calificar(10);
juanito.calificar(7);

listaAlumnos.push(manuel, juanito, alicia, sergio);
