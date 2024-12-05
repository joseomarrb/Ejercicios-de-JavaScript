/**
 * 
 * @param {*} functions 
 * @returns 
 */

/**
 * Dada una matriz de funciones [f1, f2, f3, ..., fn], devuelve una nueva función 
 * fn que es la composición de funciones de la matriz de funciones.
 * 
 * La composición de funciones de [f(x), g(x), h(x)] es fn(x) = f(g(h(x))).
 * 
 * La composición de funciones de una lista vacía de funciones es la función identidad f(x) = x.
 * 
 * Puede suponer que cada función de la matriz acepta un entero como entrada y devuelve un entero como salida.
 */

var compose = function(functions) {
    
    return function(x) {
        
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */