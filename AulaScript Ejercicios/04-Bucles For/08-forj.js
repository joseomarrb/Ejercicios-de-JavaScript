/**
 * Se trata de dibujar un triángulo rectángulo con asteriscos. 
 * El usuario tecleará un valor entero, .el programa escribirá 
 * con asteriscos tantas lineas como diga ese número Cada linea 
 * estará formada por una serie de astericos tan larga como diga 
 * el número de línea en el que está.
 * 
 * Para separar una linea de la siguiente en console o en alert debes
 *  usar "\n". En este ejercicio usa console.log.
 * 
 * Aclaraciones: Le tecleamos el valor 5. El resultado será:
 * *
 * **
 * ***
 * ****
 * *****
 */


let alto, ancho,  linea, cadena;
alto = parseInt(prompt("Teclea un número de 1 a 10"));
for ( linea = 0; linea < alto; linea++){
     cadena=''
     for(ancho = 0; ancho <= linea; ancho++){
         cadena += "*";
        }
     console.log( cadena+ "\n");
}