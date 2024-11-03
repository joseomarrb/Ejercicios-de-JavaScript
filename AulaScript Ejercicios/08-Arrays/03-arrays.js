/**
 * Sin usar métodos del objeto array, diseña una función llamada sumaLista() 
 * capaz de sumar todos los números que forman el array que se le pase como argumento.
 * 
 * Aclaraciones: Si ejecuto sumaLista([2,4,5,1,2]) deberá devolver como resultado 14
 */

let acumulador = 0;

function sumaLista(array) {
    for (let i = 0; i < array.length; i++) {
        acumulador += array[i];
    }
    return acumulador;
}

console.log(sumaLista([2,4,5,1,2]));