/**
 * Tienes una lista de objetos con los nombres de los miembros de una familia. 
 * Este script debe devolver dos objetos con los datos (nombre y edad) del 
 * miembro de mayor edad y del de menor edad.
 * 
 * Aclaraciones: Por ejemplo si la familia está compeusta por Juan: 34, Pepa: 40, 
 * Ana: 12 y Luis: 14, lel script dirá "Miembro mayor Pepa de 40  añños y Miembro 
 * más joven Ana 12 años.
 */

let array = new Array(
    {nombre: 'Pepa', edad: 18}, 
    {nombre: 'Ismael', edad: 34}, 
    {nombre: 'Alfred', edad: 21}, 
    {nombre: 'Jose', edad: 98}, 
    {nombre: 'Anita', edad: 8}
);

let menor = 100;
let mayor = 0;
let outputMayor = '';
let outputMenor = '';

array.forEach(
    datos => {
        if (datos.edad < menor) {
            menor = datos.edad;
            outputMenor = `Miembro menor es ${datos.nombre} de ${datos.edad} años`
        } else if (datos.edad > mayor) {
            mayor = datos.edad;
            outputMayor = `Miembro mayor es ${datos.nombre} de ${datos.edad} años`
        }
    }
);

console.log(outputMayor, outputMenor)

