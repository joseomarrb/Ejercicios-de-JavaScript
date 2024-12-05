/**
 * Escriba una función createCounter. Debe aceptar un entero inicial init. 
 * Debe devolver un objeto con tres funciones.
 * 
 * Las tres funciones son:
 * 
 * increment() aumenta el valor actual en 1 y luego lo devuelve.
 * decrement() reduce el valor actual en 1 y luego lo devuelve.
 * reset() establece el valor actual en init y luego lo devuelve.
 */

var createCounter = function(init) {
    let n = init
    return {
        increment: () => {
            return ++n;
        },
        decrement: () => {
            return --n;
        },
        reset: () => {
            return n = init
        },
    } 
}


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */