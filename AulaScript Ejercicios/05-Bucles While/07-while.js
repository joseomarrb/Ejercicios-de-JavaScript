/**
 * Este script le pide al usuario que vaya tecleando números enteros 
 * positivos hasta que el usuario ingrese el 0. En esete caso el programa 
 * acaba mostrando el valor máximo y mínimo de los números tecleados.
 * 
 * Aclaraciones: El susuario teclea la sere 4,2,3,5,0, El máximo es 5 y el minimo es 2. 
 * Si telcea 2,2,2,0, máximo es 2 y minimo es 2.
 */

let tecleaNum = parseInt(prompt("Ingrese números enteros positivos para saber cual es el maximo y el minimo: \nPara iniciar presione cualquier número que no sea 0"))
let maximo = -Infinity;
let minimo = Infinity;

while ( tecleaNum ) {
    tecleaNum = parseInt(prompt("Inserta otro número un número: \nPara salir inserta 0."));
    if (tecleaNum < minimo && tecleaNum > 0) {
        minimo = tecleaNum;
    }
    
    if (tecleaNum > maximo) {
        maximo = tecleaNum;
    }

    if (tecleaNum === 0) {
        alert(`MINIMO: ${minimo}\nMAXIMO: ${maximo}`);
        break;
    }
}