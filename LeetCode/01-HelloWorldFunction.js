/**
 * Escribe una función llamada createHelloWorld. 
 * Debe devolver una nueva función que siempre devuelva "Hola mundo".
 */

const createHelloWorld = function() {
    
    return function() {
        return "Hello World"
    }
};