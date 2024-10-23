/**
 * Este script debe escribir la tabla de multiplicar del número que el 
 * usuario teclee. La tabla mostrará en diferentes líneas cada producto 
 * y el resultado en la forma a x b = ab.
 * Recuerda que el salto de linea es el carácter "\n"
 * 
 * Aclaraciones: Si el usuario teclea el 4 la tabla mostrará diez líneas en la forma
 * 4 x 1 = 4
 * 4 x 2 = 8...
 */

const multiplo = parseInt(prompt("Ingresa un número que quieras múltiplicar hasta el 10:"));
let tabla = `Tabla de múltiplicar del numero ${multiplo}\n`;

for (let i = 1; i <= 10; i++) {
    tabla += `${multiplo} x ${i} = ${multiplo * i}\n`;
}

alert(tabla);

