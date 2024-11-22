/**
 * Crea un array bidimensional para almacenar nombre y calificación de un 
 * grupo de asistentes a un curso. Una vez creado rellénalo con al menos 
 * 4 elementos y luego ordénalos por orden crecientes de las calificaciones. 
 * 
 * Aclaraciones: Por ejemplo: Juan 5,Luisa 7, Ana 4, Pedro 3. al ordenarlo 
 * debe quedar: Luisa 7, Juan 7, Ana 4, Pedro 3.  
 */

let array = new Array(['Juan', 5], ['Luisa', 7], ['Ana', 4], ['Pedro', 3]);

array.sort( (a, b) => {
    return a[1] - b[1]
})

console.log(array)