/**
 * 
 * @param  {...any} args 
 */

// Escriba una función argumentsLength que devuelva el recuento de 
// argumentos que se le pasan.

var argumentsLength = function(...args) {
    return [...args].length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */